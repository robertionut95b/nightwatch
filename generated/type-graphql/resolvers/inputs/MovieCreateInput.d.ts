import { ActorCreateNestedManyWithoutMoviesInput } from "../inputs/ActorCreateNestedManyWithoutMoviesInput";
import { DirectorCreateNestedManyWithoutMoviesInput } from "../inputs/DirectorCreateNestedManyWithoutMoviesInput";
import { GenreCreateNestedManyWithoutMoviesInput } from "../inputs/GenreCreateNestedManyWithoutMoviesInput";
import { LanguageCreateNestedManyWithoutMoviesInput } from "../inputs/LanguageCreateNestedManyWithoutMoviesInput";
export declare class MovieCreateInput {
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
    directors?: DirectorCreateNestedManyWithoutMoviesInput | undefined;
    actors?: ActorCreateNestedManyWithoutMoviesInput | undefined;
    languages?: LanguageCreateNestedManyWithoutMoviesInput | undefined;
}
