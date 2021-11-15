import { GraphQLResolveInfo } from "graphql";
import { DeleteManyEpisodeArgs } from "./args/DeleteManyEpisodeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyEpisodeResolver {
    deleteManyEpisode(ctx: any, info: GraphQLResolveInfo, args: DeleteManyEpisodeArgs): Promise<AffectedRowsOutput>;
}
