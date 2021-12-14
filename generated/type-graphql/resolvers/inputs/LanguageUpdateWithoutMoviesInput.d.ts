import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { SerieUpdateManyWithoutLanguagesInput } from "../inputs/SerieUpdateManyWithoutLanguagesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class LanguageUpdateWithoutMoviesInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    seriesId?: NullableIntFieldUpdateOperationsInput | undefined;
    series?: SerieUpdateManyWithoutLanguagesInput | undefined;
}
