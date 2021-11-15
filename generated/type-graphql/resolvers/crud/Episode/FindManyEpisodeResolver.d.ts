import { GraphQLResolveInfo } from "graphql";
import { FindManyEpisodeArgs } from "./args/FindManyEpisodeArgs";
import { Episode } from "../../../models/Episode";
export declare class FindManyEpisodeResolver {
    episodes(ctx: any, info: GraphQLResolveInfo, args: FindManyEpisodeArgs): Promise<Episode[]>;
}
