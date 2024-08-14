import { Prisma } from "@prisma/client";

export const additionalFields = Prisma.defineExtension({
  result: {
    user: {
      fullName: {
        needs: { firstName: true, lastName: true },
        compute(user) {
          return `${user.firstName} ${user.lastName}`;
        },
      },
    },
  },
});

export const additionalMethods = Prisma.defineExtension({
  model: {
    $allModels: {
      // Define a new `exists` operation on all models
      // T is a generic type that corresponds to the current model
      async exists<T>(
        // `this` refers to the current type, e.g. `prisma.user` at runtime
        this: T,

        // The `exists` function will use the `where` arguments from the current model, `T`, and the `findFirst` operation
        where: Prisma.Args<T, "findFirst">["where"],
      ): Promise<boolean> {
        // Retrieve the current model at runtime
        const context = Prisma.getExtensionContext(this);

        // Prisma Client query that retrieves data based
        const result = await (context as any).findFirst({ where });
        return result !== null;
      },
    },
  },
});

//extension for soft delete
export const softDelete = Prisma.defineExtension({
  name: "softDelete",
  model: {
    $allModels: {
      async delete<M, A>(this: M, where: Prisma.Args<M, "delete">["where"]): Promise<Prisma.Result<M, A, "update">> {
        const context = Prisma.getExtensionContext(this);
        return (context as any).update({
          where,
          data: {
            deletedAt: new Date(),
          },
        });
      },
    },
  },
});

//extension for soft delete Many
export const softDeleteMany = Prisma.defineExtension({
  name: "softDeleteMany",
  model: {
    $allModels: {
      async deleteMany<M, A>(
        this: M,
        where: Prisma.Args<M, "deleteMany">["where"],
      ): Promise<Prisma.Result<M, A, "updateMany">> {
        const context = Prisma.getExtensionContext(this);

        return (context as any).updateMany({
          where,
          data: {
            deletedAt: new Date(),
          },
        });
      },
    },
  },
});

//extension for filtering soft deleted rows from queries
export const filterSoftDeleted = Prisma.defineExtension({
  name: "filterSoftDeleted",
  query: {
    $allModels: {
      async $allOperations({ operation, args, query }) {
        if (operation === "findUnique" || operation === "findFirst" || operation === "findMany") {
          args.where = { ...args.where, deletedAt: null };
          return query(args);
        }
        return query(args);
      },
    },
  },
});
