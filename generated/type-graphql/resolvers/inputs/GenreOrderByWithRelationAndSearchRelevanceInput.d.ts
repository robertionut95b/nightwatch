import { GenreOrderByRelevanceInput } from "../inputs/GenreOrderByRelevanceInput";
import { MovieOrderByRelationAggregateInput } from "../inputs/MovieOrderByRelationAggregateInput";
import { SerieOrderByRelationAggregateInput } from "../inputs/SerieOrderByRelationAggregateInput";
export declare class GenreOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    movies?: MovieOrderByRelationAggregateInput | undefined;
    series?: SerieOrderByRelationAggregateInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _relevance?: GenreOrderByRelevanceInput | undefined;
}
