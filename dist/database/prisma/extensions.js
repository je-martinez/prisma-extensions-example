"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterSoftDeleted = exports.softDeleteMany = exports.softDelete = exports.additionalMethods = exports.additionalFields = void 0;
const client_1 = require("@prisma/client");
exports.additionalFields = client_1.Prisma.defineExtension({
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
exports.additionalMethods = client_1.Prisma.defineExtension({
    model: {
        $allModels: {
            async exists(where) {
                const context = client_1.Prisma.getExtensionContext(this);
                const result = await context.findFirst({ where });
                return result !== null;
            },
        },
    },
});
exports.softDelete = client_1.Prisma.defineExtension({
    name: "softDelete",
    model: {
        $allModels: {
            async delete(where) {
                const context = client_1.Prisma.getExtensionContext(this);
                return context.update({
                    where,
                    data: {
                        deletedAt: new Date(),
                    },
                });
            },
        },
    },
});
exports.softDeleteMany = client_1.Prisma.defineExtension({
    name: "softDeleteMany",
    model: {
        $allModels: {
            async deleteMany(where) {
                const context = client_1.Prisma.getExtensionContext(this);
                return context.updateMany({
                    where,
                    data: {
                        deletedAt: new Date(),
                    },
                });
            },
        },
    },
});
exports.filterSoftDeleted = client_1.Prisma.defineExtension({
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
//# sourceMappingURL=extensions.js.map