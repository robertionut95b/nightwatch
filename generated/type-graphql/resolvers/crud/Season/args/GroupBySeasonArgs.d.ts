import { SeasonOrderByWithAggregationInput } from "../../../inputs/SeasonOrderByWithAggregationInput";
import { SeasonScalarWhereWithAggregatesInput } from "../../../inputs/SeasonScalarWhereWithAggregatesInput";
import { SeasonWhereInput } from "../../../inputs/SeasonWhereInput";
export declare class GroupBySeasonArgs {
    where?: SeasonWhereInput | undefined;
    orderBy?: SeasonOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "title" | "index" | "episodes" | "seriesId" | "launchDate" | "createdAt" | "updatedAt">;
    having?: SeasonScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
