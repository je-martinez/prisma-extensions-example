import { Module } from "@nestjs/common";
import { DatabaseService } from "./services/database.service";

export const PRISMA_INJECTION_TOKEN = "PRISMA_INJECTION_TOKEN";

@Module({
  providers: [
    {
      provide: PRISMA_INJECTION_TOKEN,
      useFactory(): DatabaseService {
        return new DatabaseService();
      },
    },
  ],
  exports: [PRISMA_INJECTION_TOKEN],
})
export class DatabaseModule {}
