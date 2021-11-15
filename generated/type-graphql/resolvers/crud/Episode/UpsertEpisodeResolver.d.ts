import { GraphQLResolveInfo } from "graphql";
import { UpsertEpisodeArgs } from "./args/UpsertEpisodeArgs";
import { Episode } from "../../../models/Episode";
export declare class UpsertEpisodeResolver {
    upsertEpisode(ctx: any, info: GraphQLResolveInfo, args: UpsertEpisodeArgs): Promise<Episode>;
}
