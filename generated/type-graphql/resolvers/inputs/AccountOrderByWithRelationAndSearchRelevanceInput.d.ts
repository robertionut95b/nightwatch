import { AccountOrderByRelevanceInput } from "../inputs/AccountOrderByRelevanceInput";
import { UserOrderByWithRelationAndSearchRelevanceInput } from "../inputs/UserOrderByWithRelationAndSearchRelevanceInput";
export declare class AccountOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    provider?: "asc" | "desc" | undefined;
    providerAccountId?: "asc" | "desc" | undefined;
    refresh_token?: "asc" | "desc" | undefined;
    access_token?: "asc" | "desc" | undefined;
    expires_at?: "asc" | "desc" | undefined;
    token_type?: "asc" | "desc" | undefined;
    scope?: "asc" | "desc" | undefined;
    id_token?: "asc" | "desc" | undefined;
    session_state?: "asc" | "desc" | undefined;
    oauth_token_secret?: "asc" | "desc" | undefined;
    oauth_token?: "asc" | "desc" | undefined;
    user?: UserOrderByWithRelationAndSearchRelevanceInput | undefined;
    _relevance?: AccountOrderByRelevanceInput | undefined;
}
