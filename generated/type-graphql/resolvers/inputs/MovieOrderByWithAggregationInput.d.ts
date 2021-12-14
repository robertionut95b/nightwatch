import { MovieAvgOrderByAggregateInput } from "../inputs/MovieAvgOrderByAggregateInput";
import { MovieCountOrderByAggregateInput } from "../inputs/MovieCountOrderByAggregateInput";
import { MovieMaxOrderByAggregateInput } from "../inputs/MovieMaxOrderByAggregateInput";
import { MovieMinOrderByAggregateInput } from "../inputs/MovieMinOrderByAggregateInput";
import { MovieSumOrderByAggregateInput } from "../inputs/MovieSumOrderByAggregateInput";
export declare class MovieOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    year?: "asc" | "desc" | undefined;
    rating?: "asc" | "desc" | undefined;
    release?: "asc" | "desc" | undefined;
    runtime?: "asc" | "desc" | undefined;
    plot?: "asc" | "desc" | undefined;
    poster?: "asc" | "desc" | undefined;
    imdbRating?: "asc" | "desc" | undefined;
    imdbID?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: MovieCountOrderByAggregateInput | undefined;
    _avg?: MovieAvgOrderByAggregateInput | undefined;
    _max?: MovieMaxOrderByAggregateInput | undefined;
    _min?: MovieMinOrderByAggregateInput | undefined;
    _sum?: MovieSumOrderByAggregateInput | undefined;
}
