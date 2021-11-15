import { ActorAvgOrderByAggregateInput } from "../inputs/ActorAvgOrderByAggregateInput";
import { ActorCountOrderByAggregateInput } from "../inputs/ActorCountOrderByAggregateInput";
import { ActorMaxOrderByAggregateInput } from "../inputs/ActorMaxOrderByAggregateInput";
import { ActorMinOrderByAggregateInput } from "../inputs/ActorMinOrderByAggregateInput";
import { ActorSumOrderByAggregateInput } from "../inputs/ActorSumOrderByAggregateInput";
export declare class ActorOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    seriesId?: "asc" | "desc" | undefined;
    _count?: ActorCountOrderByAggregateInput | undefined;
    _avg?: ActorAvgOrderByAggregateInput | undefined;
    _max?: ActorMaxOrderByAggregateInput | undefined;
    _min?: ActorMinOrderByAggregateInput | undefined;
    _sum?: ActorSumOrderByAggregateInput | undefined;
}
