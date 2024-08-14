import { Prisma } from "@prisma/client";
export declare const additionalFields: (client: any) => {
    $extends: {
        extArgs: import("@prisma/client/runtime/library").InternalArgs<{
            user: {
                fullName: {
                    needs: {
                        firstName: true;
                        lastName: true;
                    };
                    compute(user: {
                        firstName: string;
                        lastName: string;
                    }): string;
                };
            };
        }, unknown, {}, unknown>;
    };
};
export declare const additionalMethods: (client: any) => {
    $extends: {
        extArgs: import("@prisma/client/runtime/library").InternalArgs<unknown, {
            $allModels: {
                exists<T>(this: T, where: Prisma.Args<T, "findFirst">["where"]): Promise<boolean>;
            };
        }, {}, unknown>;
    };
};
export declare const softDelete: (client: any) => {
    $extends: {
        extArgs: import("@prisma/client/runtime/library").InternalArgs<unknown, {
            $allModels: {
                delete<M, A>(this: M, where: Prisma.Args<M, "delete">["where"]): Promise<Prisma.Result<M, A, "update">>;
            };
        }, {}, unknown>;
    };
};
export declare const softDeleteMany: (client: any) => {
    $extends: {
        extArgs: import("@prisma/client/runtime/library").InternalArgs<unknown, {
            $allModels: {
                deleteMany<M, A>(this: M, where: Prisma.Args<M, "deleteMany">["where"]): Promise<Prisma.Result<M, A, "updateMany">>;
            };
        }, {}, unknown>;
    };
};
export declare const filterSoftDeleted: (client: any) => {
    $extends: {
        extArgs: import("@prisma/client/runtime/library").InternalArgs<unknown, unknown, {}, unknown>;
    };
};
