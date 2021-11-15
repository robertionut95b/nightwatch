import { DirectorOrderByWithAggregationInput } from "../../../inputs/DirectorOrderByWithAggregationInput";
import { DirectorScalarWhereWithAggregatesInput } from "../../../inputs/DirectorScalarWhereWithAggregatesInput";
import { DirectorWhereInput } from "../../../inputs/DirectorWhereInput";
export declare class GroupByDirectorArgs {
    where?: DirectorWhereInput | undefined;
    orderBy?: DirectorOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "createdAt" | "updatedAt" | "seriesId">;
    having?: DirectorScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
