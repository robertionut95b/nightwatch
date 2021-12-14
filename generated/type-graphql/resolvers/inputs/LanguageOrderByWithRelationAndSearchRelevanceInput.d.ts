import { LanguageOrderByRelevanceInput } from "../inputs/LanguageOrderByRelevanceInput";
import { MovieOrderByRelationAggregateInput } from "../inputs/MovieOrderByRelationAggregateInput";
import { SerieOrderByRelationAggregateInput } from "../inputs/SerieOrderByRelationAggregateInput";
export declare class LanguageOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    movies?: MovieOrderByRelationAggregateInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    series?: SerieOrderByRelationAggregateInput | undefined;
    seriesId?: "asc" | "desc" | undefined;
    _relevance?: LanguageOrderByRelevanceInput | undefined;
}
