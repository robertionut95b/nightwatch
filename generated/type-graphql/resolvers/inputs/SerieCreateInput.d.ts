import { ActorCreateNestedManyWithoutSeriesInput } from "../inputs/ActorCreateNestedManyWithoutSeriesInput";
import { DirectorCreateNestedManyWithoutSeriesInput } from "../inputs/DirectorCreateNestedManyWithoutSeriesInput";
import { GenreCreateNestedManyWithoutSeriesInput } from "../inputs/GenreCreateNestedManyWithoutSeriesInput";
import { LanguageCreateNestedManyWithoutSeriesInput } from "../inputs/LanguageCreateNestedManyWithoutSeriesInput";
import { SeasonCreateNestedManyWithoutSeriesInput } from "../inputs/SeasonCreateNestedManyWithoutSeriesInput";
export declare class SerieCreateInput {
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
    directors?: DirectorCreateNestedManyWithoutSeriesInput | undefined;
    actors?: ActorCreateNestedManyWithoutSeriesInput | undefined;
    languages?: LanguageCreateNestedManyWithoutSeriesInput | undefined;
    seasons?: SeasonCreateNestedManyWithoutSeriesInput | undefined;
}
