import { LanguageOrderByWithAggregationInput } from "../../../inputs/LanguageOrderByWithAggregationInput";
import { LanguageScalarWhereWithAggregatesInput } from "../../../inputs/LanguageScalarWhereWithAggregatesInput";
import { LanguageWhereInput } from "../../../inputs/LanguageWhereInput";
export declare class GroupByLanguageArgs {
    where?: LanguageWhereInput | undefined;
    orderBy?: LanguageOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "createdAt" | "updatedAt" | "seriesId">;
    having?: LanguageScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
