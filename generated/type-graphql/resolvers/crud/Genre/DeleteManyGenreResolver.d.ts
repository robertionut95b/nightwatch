import { GraphQLResolveInfo } from "graphql";
import { DeleteManyGenreArgs } from "./args/DeleteManyGenreArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyGenreResolver {
    deleteManyGenre(ctx: any, info: GraphQLResolveInfo, args: DeleteManyGenreArgs): Promise<AffectedRowsOutput>;
}
