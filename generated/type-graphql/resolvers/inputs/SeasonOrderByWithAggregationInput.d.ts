import { SeasonAvgOrderByAggregateInput } from "../inputs/SeasonAvgOrderByAggregateInput";
import { SeasonCountOrderByAggregateInput } from "../inputs/SeasonCountOrderByAggregateInput";
import { SeasonMaxOrderByAggregateInput } from "../inputs/SeasonMaxOrderByAggregateInput";
import { SeasonMinOrderByAggregateInput } from "../inputs/SeasonMinOrderByAggregateInput";
import { SeasonSumOrderByAggregateInput } from "../inputs/SeasonSumOrderByAggregateInput";
export declare class SeasonOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    index?: "asc" | "desc" | undefined;
    episodes?: "asc" | "desc" | undefined;
    seriesId?: "asc" | "desc" | undefined;
    launchDate?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: SeasonCountOrderByAggregateInput | undefined;
    _avg?: SeasonAvgOrderByAggregateInput | undefined;
    _max?: SeasonMaxOrderByAggregateInput | undefined;
    _min?: SeasonMinOrderByAggregateInput | undefined;
    _sum?: SeasonSumOrderByAggregateInput | undefined;
}
