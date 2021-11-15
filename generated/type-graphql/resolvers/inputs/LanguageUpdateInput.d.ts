import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MovieUpdateManyWithoutLanguagesInput } from "../inputs/MovieUpdateManyWithoutLanguagesInput";
import { SerieUpdateOneWithoutLanguagesInput } from "../inputs/SerieUpdateOneWithoutLanguagesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class LanguageUpdateInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    movies?: MovieUpdateManyWithoutLanguagesInput | undefined;
    series?: SerieUpdateOneWithoutLanguagesInput | undefined;
}
