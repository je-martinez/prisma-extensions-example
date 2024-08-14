import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClientExtended } from "../prisma/instance";

@Injectable()
export class DatabaseService extends PrismaClientExtended implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
