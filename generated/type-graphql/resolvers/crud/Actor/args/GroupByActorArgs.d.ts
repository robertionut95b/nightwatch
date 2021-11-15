import { ActorOrderByWithAggregationInput } from "../../../inputs/ActorOrderByWithAggregationInput";
import { ActorScalarWhereWithAggregatesInput } from "../../../inputs/ActorScalarWhereWithAggregatesInput";
import { ActorWhereInput } from "../../../inputs/ActorWhereInput";
export declare class GroupByActorArgs {
    where?: ActorWhereInput | undefined;
    orderBy?: ActorOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "createdAt" | "updatedAt" | "seriesId">;
    having?: ActorScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
