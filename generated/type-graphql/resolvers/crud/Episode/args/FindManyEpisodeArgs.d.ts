import { EpisodeOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/EpisodeOrderByWithRelationAndSearchRelevanceInput";
import { EpisodeWhereInput } from "../../../inputs/EpisodeWhereInput";
import { EpisodeWhereUniqueInput } from "../../../inputs/EpisodeWhereUniqueInput";
export declare class FindManyEpisodeArgs {
    where?: EpisodeWhereInput | undefined;
    orderBy?: EpisodeOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: EpisodeWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "title" | "runtime" | "plot" | "poster" | "imdbRating" | "seasonId"> | undefined;
}
