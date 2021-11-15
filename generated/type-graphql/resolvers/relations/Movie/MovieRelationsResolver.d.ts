import { Actor } from "../../../models/Actor";
import { Director } from "../../../models/Director";
import { Genre } from "../../../models/Genre";
import { Language } from "../../../models/Language";
import { Movie } from "../../../models/Movie";
import { MovieActorsArgs } from "./args/MovieActorsArgs";
import { MovieDirectorsArgs } from "./args/MovieDirectorsArgs";
import { MovieGenresArgs } from "./args/MovieGenresArgs";
import { MovieLanguagesArgs } from "./args/MovieLanguagesArgs";
export declare class MovieRelationsResolver {
    genres(movie: Movie, ctx: any, args: MovieGenresArgs): Promise<Genre[]>;
    directors(movie: Movie, ctx: any, args: MovieDirectorsArgs): Promise<Director[]>;
    actors(movie: Movie, ctx: any, args: MovieActorsArgs): Promise<Actor[]>;
    languages(movie: Movie, ctx: any, args: MovieLanguagesArgs): Promise<Language[]>;
}
