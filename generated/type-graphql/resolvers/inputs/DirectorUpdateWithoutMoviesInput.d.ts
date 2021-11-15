import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { SerieUpdateOneWithoutDirectorsInput } from "../inputs/SerieUpdateOneWithoutDirectorsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class DirectorUpdateWithoutMoviesInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    series?: SerieUpdateOneWithoutDirectorsInput | undefined;
}
