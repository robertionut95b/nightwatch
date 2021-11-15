import { GraphQLResolveInfo } from "graphql";
import { CreateManyMovieArgs } from "./args/CreateManyMovieArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyMovieResolver {
    createManyMovie(ctx: any, info: GraphQLResolveInfo, args: CreateManyMovieArgs): Promise<AffectedRowsOutput>;
}
