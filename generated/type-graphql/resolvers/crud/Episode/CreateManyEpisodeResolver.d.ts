import { GraphQLResolveInfo } from "graphql";
import { CreateManyEpisodeArgs } from "./args/CreateManyEpisodeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyEpisodeResolver {
    createManyEpisode(ctx: any, info: GraphQLResolveInfo, args: CreateManyEpisodeArgs): Promise<AffectedRowsOutput>;
}
