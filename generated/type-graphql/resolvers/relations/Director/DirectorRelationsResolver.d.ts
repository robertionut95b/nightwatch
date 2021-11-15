import { Director } from "../../../models/Director";
import { Movie } from "../../../models/Movie";
import { Serie } from "../../../models/Serie";
import { DirectorMoviesArgs } from "./args/DirectorMoviesArgs";
export declare class DirectorRelationsResolver {
    movies(director: Director, ctx: any, args: DirectorMoviesArgs): Promise<Movie[]>;
    series(director: Director, ctx: any): Promise<Serie | null>;
}
