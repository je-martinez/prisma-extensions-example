import { PostsController } from "./posts.controller";
import { Module } from "@nestjs/common";
import { PostsService } from "./services/posts.service";
import { DatabaseService } from "src/database/services/database.service";

@Module({
  controllers: [PostsController],
  providers: [PostsService, DatabaseService],
})
export class PostsModule {}
