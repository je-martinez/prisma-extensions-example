import { PostsService } from "./services/posts.service";
export declare class PostsController {
    private postService;
    constructor(postService: PostsService);
    getPosts(): Promise<{
        id: number;
        title: string;
        published: boolean;
        content: string | null;
        authorId: number | null;
        deletedAt: Date | null;
    }[]>;
    getPostById(id: string): Promise<{
        id: number;
        title: string;
        published: boolean;
        content: string | null;
        authorId: number | null;
        deletedAt: Date | null;
    }>;
    createPost(): Promise<{
        id: number;
        title: string;
        published: boolean;
        content: string | null;
        authorId: number | null;
        deletedAt: Date | null;
    }>;
    updatePost(id: string): Promise<{
        id: number;
        title: string;
        published: boolean;
        content: string | null;
        authorId: number | null;
        deletedAt: Date | null;
    }>;
    deletePost(id: string): Promise<{
        id: number;
        title: string;
        published: boolean;
        content: string | null;
        authorId: number | null;
        deletedAt: Date | null;
    }>;
}
