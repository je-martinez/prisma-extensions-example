import { UsersController } from "./services/users.controller";
import { Module } from "@nestjs/common";
import { UsersService } from "./services/users.service";
import { DatabaseService } from "src/database/services/database.service";

@Module({
  controllers: [UsersController],
  providers: [UsersService, DatabaseService],
})
export class UsersModule {}
