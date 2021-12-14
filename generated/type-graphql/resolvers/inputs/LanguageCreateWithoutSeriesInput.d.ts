import { MovieCreateNestedManyWithoutLanguagesInput } from "../inputs/MovieCreateNestedManyWithoutLanguagesInput";
export declare class LanguageCreateWithoutSeriesInput {
    name: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    seriesId?: number | undefined;
    movies?: MovieCreateNestedManyWithoutLanguagesInput | undefined;
}
