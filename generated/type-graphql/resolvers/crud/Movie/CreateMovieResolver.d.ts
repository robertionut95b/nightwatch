import { GraphQLResolveInfo } from "graphql";
import { CreateMovieArgs } from "./args/CreateMovieArgs";
import { Movie } from "../../../models/Movie";
export declare class CreateMovieResolver {
    createMovie(ctx: any, info: GraphQLResolveInfo, args: CreateMovieArgs): Promise<Movie>;
}
