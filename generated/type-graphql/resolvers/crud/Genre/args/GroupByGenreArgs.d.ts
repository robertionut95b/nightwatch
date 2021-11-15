import { GenreOrderByWithAggregationInput } from "../../../inputs/GenreOrderByWithAggregationInput";
import { GenreScalarWhereWithAggregatesInput } from "../../../inputs/GenreScalarWhereWithAggregatesInput";
import { GenreWhereInput } from "../../../inputs/GenreWhereInput";
export declare class GroupByGenreArgs {
    where?: GenreWhereInput | undefined;
    orderBy?: GenreOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "createdAt" | "updatedAt">;
    having?: GenreScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
