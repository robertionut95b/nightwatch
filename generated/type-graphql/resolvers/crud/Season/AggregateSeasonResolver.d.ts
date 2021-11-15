import { GraphQLResolveInfo } from "graphql";
import { AggregateSeasonArgs } from "./args/AggregateSeasonArgs";
import { AggregateSeason } from "../../outputs/AggregateSeason";
export declare class AggregateSeasonResolver {
    aggregateSeason(ctx: any, info: GraphQLResolveInfo, args: AggregateSeasonArgs): Promise<AggregateSeason>;
}
