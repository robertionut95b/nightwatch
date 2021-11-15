import { LanguageAvgOrderByAggregateInput } from "../inputs/LanguageAvgOrderByAggregateInput";
import { LanguageCountOrderByAggregateInput } from "../inputs/LanguageCountOrderByAggregateInput";
import { LanguageMaxOrderByAggregateInput } from "../inputs/LanguageMaxOrderByAggregateInput";
import { LanguageMinOrderByAggregateInput } from "../inputs/LanguageMinOrderByAggregateInput";
import { LanguageSumOrderByAggregateInput } from "../inputs/LanguageSumOrderByAggregateInput";
export declare class LanguageOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    seriesId?: "asc" | "desc" | undefined;
    _count?: LanguageCountOrderByAggregateInput | undefined;
    _avg?: LanguageAvgOrderByAggregateInput | undefined;
    _max?: LanguageMaxOrderByAggregateInput | undefined;
    _min?: LanguageMinOrderByAggregateInput | undefined;
    _sum?: LanguageSumOrderByAggregateInput | undefined;
}
