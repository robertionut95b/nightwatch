import { GraphQLResolveInfo } from "graphql";
import { DeleteEpisodeArgs } from "./args/DeleteEpisodeArgs";
import { Episode } from "../../../models/Episode";
export declare class DeleteEpisodeResolver {
    deleteEpisode(ctx: any, info: GraphQLResolveInfo, args: DeleteEpisodeArgs): Promise<Episode | null>;
}
