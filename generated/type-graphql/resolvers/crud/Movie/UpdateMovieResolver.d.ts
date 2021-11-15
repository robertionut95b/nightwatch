import { GraphQLResolveInfo } from "graphql";
import { UpdateMovieArgs } from "./args/UpdateMovieArgs";
import { Movie } from "../../../models/Movie";
export declare class UpdateMovieResolver {
    updateMovie(ctx: any, info: GraphQLResolveInfo, args: UpdateMovieArgs): Promise<Movie | null>;
}
