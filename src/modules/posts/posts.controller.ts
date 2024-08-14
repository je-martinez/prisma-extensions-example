import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { PostsService } from "./services/posts.service";
import { Prisma } from "@prisma/client";
import { Chance } from "chance";

@Controller("posts")
export class PostsController {
  constructor(private postService: PostsService) {}

  @Get()
  async getPosts() {
    return this.postService.posts({});
  }

  @Get("/:id")
  async getPostById(@Param("id") id: string) {
    return this.postService.post({ id: parseInt(id) });
  }

  @Post()
  async createPost() {
    const input = {
      title: Chance().sentence({ words: 5 }),
      content: Chance().paragraph({ sentences: 15 }),
      published: Chance().bool(),
    } satisfies Prisma.PostCreateInput;

    return this.postService.createPost(input);
  }

  @Put("/:id")
  async updatePost(@Param("id") id: string) {
    const input = {
      title: Chance().sentence({ words: 5 }),
      content: Chance().paragraph({ sentences: 15 }),
      published: Chance().bool(),
    } satisfies Prisma.PostUpdateInput;
    return this.postService.updatePost({ where: { id: parseInt(id) }, data: input });
  }

  @Delete("/:id")
  async deletePost(@Param("id") id: string) {
    return this.postService.deletePost(parseInt(id));
  }
}
