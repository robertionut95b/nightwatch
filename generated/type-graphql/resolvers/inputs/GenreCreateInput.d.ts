import { MovieCreateNestedManyWithoutGenresInput } from "../inputs/MovieCreateNestedManyWithoutGenresInput";
import { SerieCreateNestedManyWithoutGenresInput } from "../inputs/SerieCreateNestedManyWithoutGenresInput";
export declare class GenreCreateInput {
    name: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    movies?: MovieCreateNestedManyWithoutGenresInput | undefined;
    series?: SerieCreateNestedManyWithoutGenresInput | undefined;
}
