import { GraphQLResolveInfo } from "graphql";
import { GroupByEpisodeArgs } from "./args/GroupByEpisodeArgs";
import { EpisodeGroupBy } from "../../outputs/EpisodeGroupBy";
export declare class GroupByEpisodeResolver {
    groupByEpisode(ctx: any, info: GraphQLResolveInfo, args: GroupByEpisodeArgs): Promise<EpisodeGroupBy[]>;
}
