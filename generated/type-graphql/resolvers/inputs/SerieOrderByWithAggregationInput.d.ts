import { SerieAvgOrderByAggregateInput } from "../inputs/SerieAvgOrderByAggregateInput";
import { SerieCountOrderByAggregateInput } from "../inputs/SerieCountOrderByAggregateInput";
import { SerieMaxOrderByAggregateInput } from "../inputs/SerieMaxOrderByAggregateInput";
import { SerieMinOrderByAggregateInput } from "../inputs/SerieMinOrderByAggregateInput";
import { SerieSumOrderByAggregateInput } from "../inputs/SerieSumOrderByAggregateInput";
export declare class SerieOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    year?: "asc" | "desc" | undefined;
    rating?: "asc" | "desc" | undefined;
    release?: "asc" | "desc" | undefined;
    runtime?: "asc" | "desc" | undefined;
    plot?: "asc" | "desc" | undefined;
    poster?: "asc" | "desc" | undefined;
    imdbRating?: "asc" | "desc" | undefined;
    totalSeasons?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: SerieCountOrderByAggregateInput | undefined;
    _avg?: SerieAvgOrderByAggregateInput | undefined;
    _max?: SerieMaxOrderByAggregateInput | undefined;
    _min?: SerieMinOrderByAggregateInput | undefined;
    _sum?: SerieSumOrderByAggregateInput | undefined;
}
