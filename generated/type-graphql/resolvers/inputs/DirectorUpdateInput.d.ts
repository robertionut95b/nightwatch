import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MovieUpdateManyWithoutDirectorsInput } from "../inputs/MovieUpdateManyWithoutDirectorsInput";
import { SerieUpdateOneWithoutDirectorsInput } from "../inputs/SerieUpdateOneWithoutDirectorsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class DirectorUpdateInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    movies?: MovieUpdateManyWithoutDirectorsInput | undefined;
    series?: SerieUpdateOneWithoutDirectorsInput | undefined;
}
