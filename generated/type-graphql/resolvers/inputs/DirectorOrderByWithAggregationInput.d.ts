import { DirectorAvgOrderByAggregateInput } from "../inputs/DirectorAvgOrderByAggregateInput";
import { DirectorCountOrderByAggregateInput } from "../inputs/DirectorCountOrderByAggregateInput";
import { DirectorMaxOrderByAggregateInput } from "../inputs/DirectorMaxOrderByAggregateInput";
import { DirectorMinOrderByAggregateInput } from "../inputs/DirectorMinOrderByAggregateInput";
import { DirectorSumOrderByAggregateInput } from "../inputs/DirectorSumOrderByAggregateInput";
export declare class DirectorOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    seriesId?: "asc" | "desc" | undefined;
    _count?: DirectorCountOrderByAggregateInput | undefined;
    _avg?: DirectorAvgOrderByAggregateInput | undefined;
    _max?: DirectorMaxOrderByAggregateInput | undefined;
    _min?: DirectorMinOrderByAggregateInput | undefined;
    _sum?: DirectorSumOrderByAggregateInput | undefined;
}
