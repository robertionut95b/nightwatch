import { AccountOrderByRelationAggregateInput } from "../inputs/AccountOrderByRelationAggregateInput";
import { SessionOrderByRelationAggregateInput } from "../inputs/SessionOrderByRelationAggregateInput";
import { UserOrderByRelevanceInput } from "../inputs/UserOrderByRelevanceInput";
export declare class UserOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    lastName?: "asc" | "desc" | undefined;
    firstName?: "asc" | "desc" | undefined;
    username?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    emailVerified?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    role?: "asc" | "desc" | undefined;
    accounts?: AccountOrderByRelationAggregateInput | undefined;
    sessions?: SessionOrderByRelationAggregateInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _relevance?: UserOrderByRelevanceInput | undefined;
}
