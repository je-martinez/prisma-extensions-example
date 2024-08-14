import { OnModuleInit } from "@nestjs/common";
declare const DatabaseService_base: new () => ReturnType<() => import("@prisma/client/runtime/library").DynamicClientExtensionThis<import(".prisma/client").Prisma.TypeMap<import("@prisma/client/runtime/library").InternalArgs & {
    result: {
        user: {
            fullName: () => {
                needs: {
                    firstName: true;
                    lastName: true;
                };
                compute(user: {
                    firstName: string;
                    lastName: string;
                }): string;
            };
        };
    };
    model: {
        $allModels: {
            exists: () => <T>(this: T, where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"]) => Promise<boolean>;
            delete: () => <M, A>(this: M, where: import("@prisma/client/runtime/library").Args<M, "delete">["where"]) => Promise<import("@prisma/client/runtime/library").Result<M, A, "update">>;
            deleteMany: () => <M, A>(this: M, where: import("@prisma/client/runtime/library").Args<M, "deleteMany">["where"]) => Promise<import("@prisma/client/runtime/library").Result<M, A, "updateMany">>;
        };
        user: {
            exists: () => <T>(this: T, where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"]) => Promise<boolean>;
            delete: () => <M, A>(this: M, where: import("@prisma/client/runtime/library").Args<M, "delete">["where"]) => Promise<import("@prisma/client/runtime/library").Result<M, A, "update">>;
            deleteMany: () => <M, A>(this: M, where: import("@prisma/client/runtime/library").Args<M, "deleteMany">["where"]) => Promise<import("@prisma/client/runtime/library").Result<M, A, "updateMany">>;
        };
        post: {
            exists: () => <T>(this: T, where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"]) => Promise<boolean>;
            delete: () => <M, A>(this: M, where: import("@prisma/client/runtime/library").Args<M, "delete">["where"]) => Promise<import("@prisma/client/runtime/library").Result<M, A, "update">>;
            deleteMany: () => <M, A>(this: M, where: import("@prisma/client/runtime/library").Args<M, "deleteMany">["where"]) => Promise<import("@prisma/client/runtime/library").Result<M, A, "updateMany">>;
        };
    };
    query: {};
    client: {};
}, import(".prisma/client").Prisma.PrismaClientOptions>, import(".prisma/client").Prisma.TypeMapCb, {
    result: {
        user: {
            fullName: () => {
                needs: {
                    firstName: true;
                    lastName: true;
                };
                compute(user: {
                    firstName: string;
                    lastName: string;
                }): string;
            };
        };
    };
    model: {
        $allModels: {
            exists: () => <T>(this: T, where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"]) => Promise<boolean>;
            delete: () => <M, A>(this: M, where: import("@prisma/client/runtime/library").Args<M, "delete">["where"]) => Promise<import("@prisma/client/runtime/library").Result<M, A, "update">>;
            deleteMany: () => <M, A>(this: M, where: import("@prisma/client/runtime/library").Args<M, "deleteMany">["where"]) => Promise<import("@prisma/client/runtime/library").Result<M, A, "updateMany">>;
        };
        user: {
            exists: () => <T>(this: T, where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"]) => Promise<boolean>;
            delete: () => <M, A>(this: M, where: import("@prisma/client/runtime/library").Args<M, "delete">["where"]) => Promise<import("@prisma/client/runtime/library").Result<M, A, "update">>;
            deleteMany: () => <M, A>(this: M, where: import("@prisma/client/runtime/library").Args<M, "deleteMany">["where"]) => Promise<import("@prisma/client/runtime/library").Result<M, A, "updateMany">>;
        };
        post: {
            exists: () => <T>(this: T, where: import("@prisma/client/runtime/library").Args<T, "findFirst">["where"]) => Promise<boolean>;
            delete: () => <M, A>(this: M, where: import("@prisma/client/runtime/library").Args<M, "delete">["where"]) => Promise<import("@prisma/client/runtime/library").Result<M, A, "update">>;
            deleteMany: () => <M, A>(this: M, where: import("@prisma/client/runtime/library").Args<M, "deleteMany">["where"]) => Promise<import("@prisma/client/runtime/library").Result<M, A, "updateMany">>;
        };
    };
    query: {};
    client: {};
}, {}>>;
export declare class DatabaseService extends DatabaseService_base implements OnModuleInit {
    constructor();
    get $prisma(): this;
    onModuleInit(): Promise<void>;
}
export {};
