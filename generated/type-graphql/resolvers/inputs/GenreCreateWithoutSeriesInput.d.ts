import { MovieCreateNestedManyWithoutGenresInput } from "../inputs/MovieCreateNestedManyWithoutGenresInput";
export declare class GenreCreateWithoutSeriesInput {
    name: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    movies?: MovieCreateNestedManyWithoutGenresInput | undefined;
}
