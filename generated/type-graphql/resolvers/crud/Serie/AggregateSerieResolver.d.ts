import { GraphQLResolveInfo } from "graphql";
import { AggregateSerieArgs } from "./args/AggregateSerieArgs";
import { AggregateSerie } from "../../outputs/AggregateSerie";
export declare class AggregateSerieResolver {
    aggregateSerie(ctx: any, info: GraphQLResolveInfo, args: AggregateSerieArgs): Promise<AggregateSerie>;
}
