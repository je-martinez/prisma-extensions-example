import { PrismaClient } from "@prisma/client";
import { filterSoftDeleted, softDelete, softDeleteMany } from "./extensions";

export const customPrismaClient = (prismaClient: PrismaClient) => {
  return prismaClient
    .$extends(softDelete) //here we add our created extensions
    .$extends(softDeleteMany)
    .$extends(filterSoftDeleted);
};

export class PrismaClientExtended extends PrismaClient {
  customPrismaClient: CustomPrismaClient;

  get client() {
    if (!this.customPrismaClient) this.customPrismaClient = customPrismaClient(this);

    return this.customPrismaClient;
  }
}

export type CustomPrismaClient = ReturnType<typeof customPrismaClient>;
