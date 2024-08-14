import { PostsModule } from "./modules/posts/posts.module";
import { UsersModule } from "./modules/users/users.module";
import { Module } from "@nestjs/common";

@Module({
  imports: [PostsModule, UsersModule],
})
export class AppModule {}
