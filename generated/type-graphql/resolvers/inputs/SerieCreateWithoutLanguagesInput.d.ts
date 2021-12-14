import { ActorCreateNestedManyWithoutSeriesInput } from "../inputs/ActorCreateNestedManyWithoutSeriesInput";
import { DirectorCreateNestedManyWithoutSeriesInput } from "../inputs/DirectorCreateNestedManyWithoutSeriesInput";
import { GenreCreateNestedManyWithoutSeriesInput } from "../inputs/GenreCreateNestedManyWithoutSeriesInput";
import { SeasonCreateNestedManyWithoutSeriesInput } from "../inputs/SeasonCreateNestedManyWithoutSeriesInput";
export declare class SerieCreateWithoutLanguagesInput {
    title: string;
    year: number;
    rating: string;
    release: Date;
    runtime: number;
    plot: string;
    poster: string;
    imdbRating: number;
    imdbID: string;
    totalSeasons: number;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    genres?: GenreCreateNestedManyWithoutSeriesInput | undefined;
    directors?: DirectorCreateNestedManyWithoutSeriesInput | undefined;
    actors?: ActorCreateNestedManyWithoutSeriesInput | undefined;
    seasons?: SeasonCreateNestedManyWithoutSeriesInput | undefined;
}
