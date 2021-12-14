import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MovieUpdateManyWithoutLanguagesInput } from "../inputs/MovieUpdateManyWithoutLanguagesInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { SerieUpdateManyWithoutLanguagesInput } from "../inputs/SerieUpdateManyWithoutLanguagesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class LanguageUpdateInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    seriesId?: NullableIntFieldUpdateOperationsInput | undefined;
    movies?: MovieUpdateManyWithoutLanguagesInput | undefined;
    series?: SerieUpdateManyWithoutLanguagesInput | undefined;
}
