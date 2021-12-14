import { ActorCreateNestedManyWithoutSeriesInput } from "../inputs/ActorCreateNestedManyWithoutSeriesInput";
import { DirectorCreateNestedManyWithoutSeriesInput } from "../inputs/DirectorCreateNestedManyWithoutSeriesInput";
import { LanguageCreateNestedManyWithoutSeriesInput } from "../inputs/LanguageCreateNestedManyWithoutSeriesInput";
import { SeasonCreateNestedManyWithoutSeriesInput } from "../inputs/SeasonCreateNestedManyWithoutSeriesInput";
export declare class SerieCreateWithoutGenresInput {
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
    directors?: DirectorCreateNestedManyWithoutSeriesInput | undefined;
    actors?: ActorCreateNestedManyWithoutSeriesInput | undefined;
    languages?: LanguageCreateNestedManyWithoutSeriesInput | undefined;
    seasons?: SeasonCreateNestedManyWithoutSeriesInput | undefined;
}
