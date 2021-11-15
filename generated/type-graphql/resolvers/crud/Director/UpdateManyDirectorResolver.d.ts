import { GraphQLResolveInfo } from "graphql";
import { UpdateManyDirectorArgs } from "./args/UpdateManyDirectorArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyDirectorResolver {
    updateManyDirector(ctx: any, info: GraphQLResolveInfo, args: UpdateManyDirectorArgs): Promise<AffectedRowsOutput>;
}
