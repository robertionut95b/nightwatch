import { ActorCreateNestedManyWithoutMoviesInput } from "../inputs/ActorCreateNestedManyWithoutMoviesInput";
import { GenreCreateNestedManyWithoutMoviesInput } from "../inputs/GenreCreateNestedManyWithoutMoviesInput";
import { LanguageCreateNestedManyWithoutMoviesInput } from "../inputs/LanguageCreateNestedManyWithoutMoviesInput";
export declare class MovieCreateWithoutDirectorsInput {
    title: string;
    year: number;
    rating: string;
    release: Date;
    runtime: number;
    plot: string;
    poster: string;
    imdbRating: number;
    imdbID: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    genres?: GenreCreateNestedManyWithoutMoviesInput | undefined;
    actors?: ActorCreateNestedManyWithoutMoviesInput | undefined;
    languages?: LanguageCreateNestedManyWithoutMoviesInput | undefined;
}
