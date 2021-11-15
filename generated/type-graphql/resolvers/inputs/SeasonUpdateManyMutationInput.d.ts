import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class SeasonUpdateManyMutationInput {
    title?: StringFieldUpdateOperationsInput | undefined;
    index?: IntFieldUpdateOperationsInput | undefined;
    episodes?: IntFieldUpdateOperationsInput | undefined;
    launchDate?: DateTimeFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
