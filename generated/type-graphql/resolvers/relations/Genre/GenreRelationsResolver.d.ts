import { Genre } from "../../../models/Genre";
import { Movie } from "../../../models/Movie";
import { Serie } from "../../../models/Serie";
import { GenreMoviesArgs } from "./args/GenreMoviesArgs";
import { GenreSeriesArgs } from "./args/GenreSeriesArgs";
export declare class GenreRelationsResolver {
    movies(genre: Genre, ctx: any, args: GenreMoviesArgs): Promise<Movie[]>;
    series(genre: Genre, ctx: any, args: GenreSeriesArgs): Promise<Serie[]>;
}
