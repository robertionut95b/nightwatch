import { DirectorOrderByRelevanceInput } from "../inputs/DirectorOrderByRelevanceInput";
import { MovieOrderByRelationAggregateInput } from "../inputs/MovieOrderByRelationAggregateInput";
import { SerieOrderByWithRelationAndSearchRelevanceInput } from "../inputs/SerieOrderByWithRelationAndSearchRelevanceInput";
export declare class DirectorOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    movies?: MovieOrderByRelationAggregateInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    series?: SerieOrderByWithRelationAndSearchRelevanceInput | undefined;
    seriesId?: "asc" | "desc" | undefined;
    _relevance?: DirectorOrderByRelevanceInput | undefined;
}
