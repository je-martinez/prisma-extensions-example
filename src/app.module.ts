import { DatabaseModule } from "./database/database.module";
import { PostsModule } from "./modules/posts/posts.module";
import { UsersModule } from "./modules/users/users.module";
import { Module } from "@nestjs/common";

@Module({
  imports: [DatabaseModule, PostsModule, UsersModule],
})
export class AppModule {}
