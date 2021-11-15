import { ActorOrderByRelationAggregateInput } from "../inputs/ActorOrderByRelationAggregateInput";
import { DirectorOrderByRelationAggregateInput } from "../inputs/DirectorOrderByRelationAggregateInput";
import { GenreOrderByRelationAggregateInput } from "../inputs/GenreOrderByRelationAggregateInput";
import { LanguageOrderByRelationAggregateInput } from "../inputs/LanguageOrderByRelationAggregateInput";
import { SeasonOrderByRelationAggregateInput } from "../inputs/SeasonOrderByRelationAggregateInput";
import { SerieOrderByRelevanceInput } from "../inputs/SerieOrderByRelevanceInput";
export declare class SerieOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    year?: "asc" | "desc" | undefined;
    rating?: "asc" | "desc" | undefined;
    release?: "asc" | "desc" | undefined;
    runtime?: "asc" | "desc" | undefined;
    genres?: GenreOrderByRelationAggregateInput | undefined;
    directors?: DirectorOrderByRelationAggregateInput | undefined;
    actors?: ActorOrderByRelationAggregateInput | undefined;
    plot?: "asc" | "desc" | undefined;
    languages?: LanguageOrderByRelationAggregateInput | undefined;
    poster?: "asc" | "desc" | undefined;
    imdbRating?: "asc" | "desc" | undefined;
    totalSeasons?: "asc" | "desc" | undefined;
    seasons?: SeasonOrderByRelationAggregateInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _relevance?: SerieOrderByRelevanceInput | undefined;
}
