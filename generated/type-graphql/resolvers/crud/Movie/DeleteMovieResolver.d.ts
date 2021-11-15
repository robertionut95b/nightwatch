import { GraphQLResolveInfo } from "graphql";
import { DeleteMovieArgs } from "./args/DeleteMovieArgs";
import { Movie } from "../../../models/Movie";
export declare class DeleteMovieResolver {
    deleteMovie(ctx: any, info: GraphQLResolveInfo, args: DeleteMovieArgs): Promise<Movie | null>;
}
