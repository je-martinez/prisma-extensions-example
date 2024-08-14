import { Inject, Injectable } from "@nestjs/common";
import { Post, Prisma } from "@prisma/client";
import { PRISMA_INJECTION_TOKEN } from "src/database/database.module";
import { DatabaseService } from "src/database/services/database.service";

@Injectable()
export class PostsService {
  constructor(@Inject(PRISMA_INJECTION_TOKEN) private prisma: DatabaseService) {}

  async post(postWhereUniqueInput: Prisma.PostWhereUniqueInput): Promise<Post | null> {
    return this.prisma.post.findUnique({
      where: postWhereUniqueInput,
    });
  }

  async posts(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PostWhereUniqueInput;
    where?: Prisma.PostWhereInput;
    orderBy?: Prisma.PostOrderByWithRelationInput;
  }): Promise<Post[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.post.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createPost(data: Prisma.PostCreateInput): Promise<Post> {
    return this.prisma.post.create({
      data,
    });
  }

  async updatePost(params: { where: Prisma.PostWhereUniqueInput; data: Prisma.PostUpdateInput }): Promise<Post> {
    const { data, where } = params;
    return this.prisma.post.update({
      data,
      where,
    });
  }

  async deletePost(id: number): Promise<Post> {
    return this.prisma.post.delete({
      id,
    });
  }
}
