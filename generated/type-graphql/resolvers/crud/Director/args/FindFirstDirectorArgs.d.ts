import { DirectorOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/DirectorOrderByWithRelationAndSearchRelevanceInput";
import { DirectorWhereInput } from "../../../inputs/DirectorWhereInput";
import { DirectorWhereUniqueInput } from "../../../inputs/DirectorWhereUniqueInput";
export declare class FindFirstDirectorArgs {
    where?: DirectorWhereInput | undefined;
    orderBy?: DirectorOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: DirectorWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "createdAt" | "updatedAt" | "seriesId"> | undefined;
}
