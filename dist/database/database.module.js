"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = exports.PRISMA_INJECTION_TOKEN = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("./services/database.service");
exports.PRISMA_INJECTION_TOKEN = "PRISMA_INJECTION_TOKEN";
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        providers: [
            {
                provide: exports.PRISMA_INJECTION_TOKEN,
                useFactory() {
                    return new database_service_1.DatabaseService();
                },
            },
        ],
        exports: [exports.PRISMA_INJECTION_TOKEN],
    })
], DatabaseModule);
//# sourceMappingURL=database.module.js.map