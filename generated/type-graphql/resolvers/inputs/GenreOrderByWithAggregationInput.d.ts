import { GenreAvgOrderByAggregateInput } from "../inputs/GenreAvgOrderByAggregateInput";
import { GenreCountOrderByAggregateInput } from "../inputs/GenreCountOrderByAggregateInput";
import { GenreMaxOrderByAggregateInput } from "../inputs/GenreMaxOrderByAggregateInput";
import { GenreMinOrderByAggregateInput } from "../inputs/GenreMinOrderByAggregateInput";
import { GenreSumOrderByAggregateInput } from "../inputs/GenreSumOrderByAggregateInput";
export declare class GenreOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: GenreCountOrderByAggregateInput | undefined;
    _avg?: GenreAvgOrderByAggregateInput | undefined;
    _max?: GenreMaxOrderByAggregateInput | undefined;
    _min?: GenreMinOrderByAggregateInput | undefined;
    _sum?: GenreSumOrderByAggregateInput | undefined;
}
