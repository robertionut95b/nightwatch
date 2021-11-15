import { GraphQLResolveInfo } from "graphql";
import { AggregateEpisodeArgs } from "./args/AggregateEpisodeArgs";
import { AggregateEpisode } from "../../outputs/AggregateEpisode";
export declare class AggregateEpisodeResolver {
    aggregateEpisode(ctx: any, info: GraphQLResolveInfo, args: AggregateEpisodeArgs): Promise<AggregateEpisode>;
}
