import { UsersService } from "./services/users.service";
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUsers(): Promise<{
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        deletedAt: Date | null;
    }[]>;
    getUserById(id: string): Promise<{
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        deletedAt: Date | null;
    }>;
    createUser(): Promise<{
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        deletedAt: Date | null;
    }>;
    updateUser(id: string): Promise<{
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        deletedAt: Date | null;
    }>;
    deleteUser(id: string): Promise<{
        id: number;
        email: string;
        firstName: string;
        lastName: string;
        deletedAt: Date | null;
    }>;
}
