import { SerieCreateNestedManyWithoutLanguagesInput } from "../inputs/SerieCreateNestedManyWithoutLanguagesInput";
export declare class LanguageCreateWithoutMoviesInput {
    name: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    seriesId?: number | undefined;
    series?: SerieCreateNestedManyWithoutLanguagesInput | undefined;
}
