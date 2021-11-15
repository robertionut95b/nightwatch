import { GraphQLResolveInfo } from "graphql";
import { UpdateManyEpisodeArgs } from "./args/UpdateManyEpisodeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyEpisodeResolver {
    updateManyEpisode(ctx: any, info: GraphQLResolveInfo, args: UpdateManyEpisodeArgs): Promise<AffectedRowsOutput>;
}
