import { SessionOrderByRelevanceInput } from "../inputs/SessionOrderByRelevanceInput";
import { UserOrderByWithRelationAndSearchRelevanceInput } from "../inputs/UserOrderByWithRelationAndSearchRelevanceInput";
export declare class SessionOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    sessionToken?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    expires?: "asc" | "desc" | undefined;
    user?: UserOrderByWithRelationAndSearchRelevanceInput | undefined;
    _relevance?: SessionOrderByRelevanceInput | undefined;
}
