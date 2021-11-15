import { GraphQLResolveInfo } from "graphql";
import { UpdateManySeasonArgs } from "./args/UpdateManySeasonArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManySeasonResolver {
    updateManySeason(ctx: any, info: GraphQLResolveInfo, args: UpdateManySeasonArgs): Promise<AffectedRowsOutput>;
}
