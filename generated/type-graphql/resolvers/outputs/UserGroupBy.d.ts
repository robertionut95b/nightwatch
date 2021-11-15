import { UserCountAggregate } from "../outputs/UserCountAggregate";
import { UserMaxAggregate } from "../outputs/UserMaxAggregate";
import { UserMinAggregate } from "../outputs/UserMinAggregate";
export declare class UserGroupBy {
    id: string;
    lastName: string | null;
    firstName: string | null;
    username: string | null;
    email: string;
    emailVerified: Date | null;
    image: string | null;
    role: "USER" | "ADMIN";
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregate | null;
    _min: UserMinAggregate | null;
    _max: UserMaxAggregate | null;
}
