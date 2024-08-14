import { PrismaClient } from "@prisma/client";
import {
  additionalFields,
  additionalMethods,
  filterSoftDeleted,
  softDelete,
  softDeleteMany,
} from "./extensions";

export function getExtendedClient() {
  const client = () => {
    return new PrismaClient()
      .$extends(additionalFields)
      .$extends(additionalMethods)
      .$extends(softDelete)
      .$extends(softDeleteMany)
      .$extends(filterSoftDeleted);
  };

  return class {
    constructor() {
      return client();
    }
  } as new () => ReturnType<typeof client>;
}
