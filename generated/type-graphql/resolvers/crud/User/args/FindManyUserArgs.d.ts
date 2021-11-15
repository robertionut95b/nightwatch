import { UserOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/UserOrderByWithRelationAndSearchRelevanceInput";
import { UserWhereInput } from "../../../inputs/UserWhereInput";
import { UserWhereUniqueInput } from "../../../inputs/UserWhereUniqueInput";
export declare class FindManyUserArgs {
    where?: UserWhereInput | undefined;
    orderBy?: UserOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: UserWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "lastName" | "firstName" | "username" | "email" | "emailVerified" | "image" | "role" | "createdAt" | "updatedAt"> | undefined;
}
