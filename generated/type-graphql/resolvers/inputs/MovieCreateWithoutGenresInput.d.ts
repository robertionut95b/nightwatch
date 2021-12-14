import { ActorCreateNestedManyWithoutMoviesInput } from "../inputs/ActorCreateNestedManyWithoutMoviesInput";
import { DirectorCreateNestedManyWithoutMoviesInput } from "../inputs/DirectorCreateNestedManyWithoutMoviesInput";
import { LanguageCreateNestedManyWithoutMoviesInput } from "../inputs/LanguageCreateNestedManyWithoutMoviesInput";
export declare class MovieCreateWithoutGenresInput {
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
    directors?: DirectorCreateNestedManyWithoutMoviesInput | undefined;
    actors?: ActorCreateNestedManyWithoutMoviesInput | undefined;
    languages?: LanguageCreateNestedManyWithoutMoviesInput | undefined;
}
