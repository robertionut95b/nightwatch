import { GraphQLResolveInfo } from "graphql";
import { CreateManyGenreArgs } from "./args/CreateManyGenreArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyGenreResolver {
    createManyGenre(ctx: any, info: GraphQLResolveInfo, args: CreateManyGenreArgs): Promise<AffectedRowsOutput>;
}
