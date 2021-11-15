import { SerieCreateNestedOneWithoutLanguagesInput } from "../inputs/SerieCreateNestedOneWithoutLanguagesInput";
export declare class LanguageCreateWithoutMoviesInput {
    name: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    series?: SerieCreateNestedOneWithoutLanguagesInput | undefined;
}
