import { Language } from "../../../models/Language";
import { Movie } from "../../../models/Movie";
import { Serie } from "../../../models/Serie";
import { LanguageMoviesArgs } from "./args/LanguageMoviesArgs";
import { LanguageSeriesArgs } from "./args/LanguageSeriesArgs";
export declare class LanguageRelationsResolver {
    movies(language: Language, ctx: any, args: LanguageMoviesArgs): Promise<Movie[]>;
    series(language: Language, ctx: any, args: LanguageSeriesArgs): Promise<Serie[]>;
}
