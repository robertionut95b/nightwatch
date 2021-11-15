import { SeasonOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/SeasonOrderByWithRelationAndSearchRelevanceInput";
import { SeasonWhereInput } from "../../../inputs/SeasonWhereInput";
import { SeasonWhereUniqueInput } from "../../../inputs/SeasonWhereUniqueInput";
export declare class SerieSeasonsArgs {
    where?: SeasonWhereInput | undefined;
    orderBy?: SeasonOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: SeasonWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "title" | "index" | "episodes" | "seriesId" | "launchDate" | "createdAt" | "updatedAt"> | undefined;
}
