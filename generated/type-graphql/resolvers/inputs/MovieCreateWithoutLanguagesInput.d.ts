import { ActorCreateNestedManyWithoutMoviesInput } from "../inputs/ActorCreateNestedManyWithoutMoviesInput";
import { DirectorCreateNestedManyWithoutMoviesInput } from "../inputs/DirectorCreateNestedManyWithoutMoviesInput";
import { GenreCreateNestedManyWithoutMoviesInput } from "../inputs/GenreCreateNestedManyWithoutMoviesInput";
export declare class MovieCreateWithoutLanguagesInput {
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
}
