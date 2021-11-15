import { SerieCreateNestedManyWithoutGenresInput } from "../inputs/SerieCreateNestedManyWithoutGenresInput";
export declare class GenreCreateWithoutMoviesInput {
    name: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    series?: SerieCreateNestedManyWithoutGenresInput | undefined;
}
