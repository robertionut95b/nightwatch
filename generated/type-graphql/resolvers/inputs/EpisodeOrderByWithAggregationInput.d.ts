import { EpisodeAvgOrderByAggregateInput } from "../inputs/EpisodeAvgOrderByAggregateInput";
import { EpisodeCountOrderByAggregateInput } from "../inputs/EpisodeCountOrderByAggregateInput";
import { EpisodeMaxOrderByAggregateInput } from "../inputs/EpisodeMaxOrderByAggregateInput";
import { EpisodeMinOrderByAggregateInput } from "../inputs/EpisodeMinOrderByAggregateInput";
import { EpisodeSumOrderByAggregateInput } from "../inputs/EpisodeSumOrderByAggregateInput";
export declare class EpisodeOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    runtime?: "asc" | "desc" | undefined;
    plot?: "asc" | "desc" | undefined;
    poster?: "asc" | "desc" | undefined;
    imdbRating?: "asc" | "desc" | undefined;
    seasonId?: "asc" | "desc" | undefined;
    _count?: EpisodeCountOrderByAggregateInput | undefined;
    _avg?: EpisodeAvgOrderByAggregateInput | undefined;
    _max?: EpisodeMaxOrderByAggregateInput | undefined;
    _min?: EpisodeMinOrderByAggregateInput | undefined;
    _sum?: EpisodeSumOrderByAggregateInput | undefined;
}
