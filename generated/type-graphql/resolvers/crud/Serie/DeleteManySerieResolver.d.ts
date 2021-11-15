import { GraphQLResolveInfo } from "graphql";
import { DeleteManySerieArgs } from "./args/DeleteManySerieArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManySerieResolver {
    deleteManySerie(ctx: any, info: GraphQLResolveInfo, args: DeleteManySerieArgs): Promise<AffectedRowsOutput>;
}
