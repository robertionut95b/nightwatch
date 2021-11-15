import { Account } from "../models/Account";
import { Session } from "../models/Session";
import { UserCount } from "../resolvers/outputs/UserCount";
export declare class User {
    id: string;
    lastName?: string | null;
    firstName?: string | null;
    username?: string | null;
    email: string;
    emailVerified?: Date | null;
    image?: string | null;
    role: "USER" | "ADMIN";
    accounts?: Account[];
    sessions?: Session[];
    createdAt: Date;
    updatedAt: Date;
    _count?: UserCount | null;
}
