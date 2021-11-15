import { SessionOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/SessionOrderByWithRelationAndSearchRelevanceInput";
import { SessionWhereInput } from "../../../inputs/SessionWhereInput";
import { SessionWhereUniqueInput } from "../../../inputs/SessionWhereUniqueInput";
export declare class FindFirstSessionArgs {
    where?: SessionWhereInput | undefined;
    orderBy?: SessionOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: SessionWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "sessionToken" | "userId" | "expires"> | undefined;
}
