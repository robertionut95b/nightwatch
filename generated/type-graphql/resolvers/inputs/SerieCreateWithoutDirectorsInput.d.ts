import { ActorCreateNestedManyWithoutSeriesInput } from "../inputs/ActorCreateNestedManyWithoutSeriesInput";
import { GenreCreateNestedManyWithoutSeriesInput } from "../inputs/GenreCreateNestedManyWithoutSeriesInput";
import { LanguageCreateNestedManyWithoutSeriesInput } from "../inputs/LanguageCreateNestedManyWithoutSeriesInput";
import { SeasonCreateNestedManyWithoutSeriesInput } from "../inputs/SeasonCreateNestedManyWithoutSeriesInput";
export declare class SerieCreateWithoutDirectorsInput {
    title: string;
    year: number;
    rating: string;
    release: Date;
    runtime: number;
    plot: string;
    poster: string;
    imdbRating: number;
    totalSeasons: number;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    genres?: GenreCreateNestedManyWithoutSeriesInput | undefined;
    actors?: ActorCreateNestedManyWithoutSeriesInput | undefined;
    languages?: LanguageCreateNestedManyWithoutSeriesInput | undefined;
    seasons?: SeasonCreateNestedManyWithoutSeriesInput | undefined;
}
