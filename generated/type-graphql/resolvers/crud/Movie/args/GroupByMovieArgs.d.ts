import { MovieOrderByWithAggregationInput } from "../../../inputs/MovieOrderByWithAggregationInput";
import { MovieScalarWhereWithAggregatesInput } from "../../../inputs/MovieScalarWhereWithAggregatesInput";
import { MovieWhereInput } from "../../../inputs/MovieWhereInput";
export declare class GroupByMovieArgs {
    where?: MovieWhereInput | undefined;
    orderBy?: MovieOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "title" | "year" | "rating" | "release" | "runtime" | "plot" | "poster" | "imdbRating" | "createdAt" | "updatedAt">;
    having?: MovieScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
