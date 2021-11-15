import { GraphQLResolveInfo } from "graphql";
import { UpsertMovieArgs } from "./args/UpsertMovieArgs";
import { Movie } from "../../../models/Movie";
export declare class UpsertMovieResolver {
    upsertMovie(ctx: any, info: GraphQLResolveInfo, args: UpsertMovieArgs): Promise<Movie>;
}
