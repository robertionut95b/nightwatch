import { GraphQLResolveInfo } from "graphql";
import { UpdateManyGenreArgs } from "./args/UpdateManyGenreArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyGenreResolver {
    updateManyGenre(ctx: any, info: GraphQLResolveInfo, args: UpdateManyGenreArgs): Promise<AffectedRowsOutput>;
}
