import { GraphQLResolveInfo } from "graphql";
import { CreateEpisodeArgs } from "./args/CreateEpisodeArgs";
import { Episode } from "../../../models/Episode";
export declare class CreateEpisodeResolver {
    createEpisode(ctx: any, info: GraphQLResolveInfo, args: CreateEpisodeArgs): Promise<Episode>;
}
