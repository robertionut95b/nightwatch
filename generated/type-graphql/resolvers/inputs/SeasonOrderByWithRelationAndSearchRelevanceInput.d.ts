import { EpisodeOrderByRelationAggregateInput } from "../inputs/EpisodeOrderByRelationAggregateInput";
import { SeasonOrderByRelevanceInput } from "../inputs/SeasonOrderByRelevanceInput";
import { SerieOrderByWithRelationAndSearchRelevanceInput } from "../inputs/SerieOrderByWithRelationAndSearchRelevanceInput";
export declare class SeasonOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    index?: "asc" | "desc" | undefined;
    episodes?: "asc" | "desc" | undefined;
    episodeIds?: EpisodeOrderByRelationAggregateInput | undefined;
    series?: SerieOrderByWithRelationAndSearchRelevanceInput | undefined;
    seriesId?: "asc" | "desc" | undefined;
    launchDate?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _relevance?: SeasonOrderByRelevanceInput | undefined;
}
