import { GraphQLResolveInfo } from "graphql";
import { FindUniqueEpisodeArgs } from "./args/FindUniqueEpisodeArgs";
import { Episode } from "../../../models/Episode";
export declare class FindUniqueEpisodeResolver {
    episode(ctx: any, info: GraphQLResolveInfo, args: FindUniqueEpisodeArgs): Promise<Episode | null>;
}
