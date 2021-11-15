import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class MovieUpdateManyMutationInput {
    title?: StringFieldUpdateOperationsInput | undefined;
    year?: IntFieldUpdateOperationsInput | undefined;
    rating?: StringFieldUpdateOperationsInput | undefined;
    release?: DateTimeFieldUpdateOperationsInput | undefined;
    runtime?: IntFieldUpdateOperationsInput | undefined;
    plot?: StringFieldUpdateOperationsInput | undefined;
    poster?: StringFieldUpdateOperationsInput | undefined;
    imdbRating?: FloatFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
