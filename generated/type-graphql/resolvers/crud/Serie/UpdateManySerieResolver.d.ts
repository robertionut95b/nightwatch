import { GraphQLResolveInfo } from "graphql";
import { UpdateManySerieArgs } from "./args/UpdateManySerieArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManySerieResolver {
    updateManySerie(ctx: any, info: GraphQLResolveInfo, args: UpdateManySerieArgs): Promise<AffectedRowsOutput>;
}
