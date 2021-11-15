import { AccountOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/AccountOrderByWithRelationAndSearchRelevanceInput";
import { AccountWhereInput } from "../../../inputs/AccountWhereInput";
import { AccountWhereUniqueInput } from "../../../inputs/AccountWhereUniqueInput";
export declare class UserAccountsArgs {
    where?: AccountWhereInput | undefined;
    orderBy?: AccountOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: AccountWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "oauth_token_secret" | "oauth_token"> | undefined;
}
