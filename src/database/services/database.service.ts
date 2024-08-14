import { Injectable, OnModuleInit } from "@nestjs/common";
import { getExtendedClient } from "../prisma/instance";

@Injectable()
export class DatabaseService extends getExtendedClient() implements OnModuleInit {
  constructor() {
    super();
  }

  get $prisma() {
    return this;
  }
  async onModuleInit() {
    await this.$connect();
  }
}
