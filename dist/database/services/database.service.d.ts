import { OnModuleInit } from "@nestjs/common";
import { PrismaClientExtended } from "../prisma/instance";
export declare class DatabaseService extends PrismaClientExtended implements OnModuleInit {
    onModuleInit(): Promise<void>;
}
