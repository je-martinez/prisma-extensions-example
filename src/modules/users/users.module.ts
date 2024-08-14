import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { UsersService } from "./services/users.service";
import { UsersController } from "./users.controller";

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
