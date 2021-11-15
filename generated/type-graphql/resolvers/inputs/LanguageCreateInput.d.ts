import { MovieCreateNestedManyWithoutLanguagesInput } from "../inputs/MovieCreateNestedManyWithoutLanguagesInput";
import { SerieCreateNestedOneWithoutLanguagesInput } from "../inputs/SerieCreateNestedOneWithoutLanguagesInput";
export declare class LanguageCreateInput {
    name: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    movies?: MovieCreateNestedManyWithoutLanguagesInput | undefined;
    series?: SerieCreateNestedOneWithoutLanguagesInput | undefined;
}
