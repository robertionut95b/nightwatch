import { MovieCreateNestedManyWithoutLanguagesInput } from "../inputs/MovieCreateNestedManyWithoutLanguagesInput";
import { SerieCreateNestedManyWithoutLanguagesInput } from "../inputs/SerieCreateNestedManyWithoutLanguagesInput";
export declare class LanguageCreateInput {
    name: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    seriesId?: number | undefined;
    movies?: MovieCreateNestedManyWithoutLanguagesInput | undefined;
    series?: SerieCreateNestedManyWithoutLanguagesInput | undefined;
}
