import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { SerieUpdateOneWithoutLanguagesInput } from "../inputs/SerieUpdateOneWithoutLanguagesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class LanguageUpdateWithoutMoviesInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    series?: SerieUpdateOneWithoutLanguagesInput | undefined;
}
