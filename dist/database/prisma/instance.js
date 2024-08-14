"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaClientExtended = exports.customPrismaClient = void 0;
const client_1 = require("@prisma/client");
const extensions_1 = require("./extensions");
const customPrismaClient = (prismaClient) => {
    return prismaClient
        .$extends(extensions_1.softDelete)
        .$extends(extensions_1.softDeleteMany)
        .$extends(extensions_1.filterSoftDeleted);
};
exports.customPrismaClient = customPrismaClient;
class PrismaClientExtended extends client_1.PrismaClient {
    get client() {
        if (!this.customPrismaClient)
            this.customPrismaClient = (0, exports.customPrismaClient)(this);
        return this.customPrismaClient;
    }
}
exports.PrismaClientExtended = PrismaClientExtended;
//# sourceMappingURL=instance.js.map