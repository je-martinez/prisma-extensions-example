"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExtendedClient = getExtendedClient;
const client_1 = require("@prisma/client");
const extensions_1 = require("./extensions");
function getExtendedClient() {
    const client = () => {
        return new client_1.PrismaClient()
            .$extends(extensions_1.additionalFields)
            .$extends(extensions_1.additionalMethods)
            .$extends(extensions_1.softDelete)
            .$extends(extensions_1.softDeleteMany)
            .$extends(extensions_1.filterSoftDeleted);
    };
    return class {
        constructor() {
            return client();
        }
    };
}
//# sourceMappingURL=instance.js.map