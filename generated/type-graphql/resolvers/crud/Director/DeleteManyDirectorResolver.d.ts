import { GraphQLResolveInfo } from "graphql";
import { DeleteManyDirectorArgs } from "./args/DeleteManyDirectorArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyDirectorResolver {
    deleteManyDirector(ctx: any, info: GraphQLResolveInfo, args: DeleteManyDirectorArgs): Promise<AffectedRowsOutput>;
}
