import { GraphQLResolveInfo } from "graphql";
import { FindFirstEpisodeArgs } from "./args/FindFirstEpisodeArgs";
import { Episode } from "../../../models/Episode";
export declare class FindFirstEpisodeResolver {
    findFirstEpisode(ctx: any, info: GraphQLResolveInfo, args: FindFirstEpisodeArgs): Promise<Episode | null>;
}
