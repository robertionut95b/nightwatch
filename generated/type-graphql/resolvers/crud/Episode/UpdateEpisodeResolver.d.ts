import { GraphQLResolveInfo } from "graphql";
import { UpdateEpisodeArgs } from "./args/UpdateEpisodeArgs";
import { Episode } from "../../../models/Episode";
export declare class UpdateEpisodeResolver {
    updateEpisode(ctx: any, info: GraphQLResolveInfo, args: UpdateEpisodeArgs): Promise<Episode | null>;
}
