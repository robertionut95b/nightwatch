import { GraphQLResolveInfo } from "graphql";
import { CreateManyDirectorArgs } from "./args/CreateManyDirectorArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyDirectorResolver {
    createManyDirector(ctx: any, info: GraphQLResolveInfo, args: CreateManyDirectorArgs): Promise<AffectedRowsOutput>;
}
