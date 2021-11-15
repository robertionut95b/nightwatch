import { GraphQLResolveInfo } from "graphql";
import { DeleteManySeasonArgs } from "./args/DeleteManySeasonArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManySeasonResolver {
    deleteManySeason(ctx: any, info: GraphQLResolveInfo, args: DeleteManySeasonArgs): Promise<AffectedRowsOutput>;
}
