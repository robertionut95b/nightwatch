import { EpisodeOrderByRelevanceInput } from "../inputs/EpisodeOrderByRelevanceInput";
import { SeasonOrderByWithRelationAndSearchRelevanceInput } from "../inputs/SeasonOrderByWithRelationAndSearchRelevanceInput";
export declare class EpisodeOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    runtime?: "asc" | "desc" | undefined;
    plot?: "asc" | "desc" | undefined;
    poster?: "asc" | "desc" | undefined;
    imdbRating?: "asc" | "desc" | undefined;
    imdbID?: "asc" | "desc" | undefined;
    season?: SeasonOrderByWithRelationAndSearchRelevanceInput | undefined;
    seasonId?: "asc" | "desc" | undefined;
    _relevance?: EpisodeOrderByRelevanceInput | undefined;
}
