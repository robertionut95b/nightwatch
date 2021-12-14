import { SerieOrderByWithAggregationInput } from "../../../inputs/SerieOrderByWithAggregationInput";
import { SerieScalarWhereWithAggregatesInput } from "../../../inputs/SerieScalarWhereWithAggregatesInput";
import { SerieWhereInput } from "../../../inputs/SerieWhereInput";
export declare class GroupBySerieArgs {
    where?: SerieWhereInput | undefined;
    orderBy?: SerieOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "title" | "year" | "rating" | "release" | "runtime" | "plot" | "poster" | "imdbRating" | "imdbID" | "totalSeasons" | "createdAt" | "updatedAt">;
    having?: SerieScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
