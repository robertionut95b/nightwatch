import { EpisodeOrderByWithAggregationInput } from "../../../inputs/EpisodeOrderByWithAggregationInput";
import { EpisodeScalarWhereWithAggregatesInput } from "../../../inputs/EpisodeScalarWhereWithAggregatesInput";
import { EpisodeWhereInput } from "../../../inputs/EpisodeWhereInput";
export declare class GroupByEpisodeArgs {
    where?: EpisodeWhereInput | undefined;
    orderBy?: EpisodeOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "title" | "runtime" | "plot" | "poster" | "imdbRating" | "imdbID" | "seasonId">;
    having?: EpisodeScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
