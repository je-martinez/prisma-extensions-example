import { Post, Prisma } from "@prisma/client";
import { DatabaseService } from "src/database/services/database.service";
export declare class PostsService {
    private prisma;
    constructor(prisma: DatabaseService);
    post(postWhereUniqueInput: Prisma.PostWhereUniqueInput): Promise<Post | null>;
    posts(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.PostWhereUniqueInput;
        where?: Prisma.PostWhereInput;
        orderBy?: Prisma.PostOrderByWithRelationInput;
    }): Promise<Post[]>;
    createPost(data: Prisma.PostCreateInput): Promise<Post>;
    updatePost(params: {
        where: Prisma.PostWhereUniqueInput;
        data: Prisma.PostUpdateInput;
    }): Promise<Post>;
    deletePost(id: number): Promise<Post>;
}
