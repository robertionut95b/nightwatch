import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { SerieUpdateOneRequiredWithoutSeasonsInput } from "../inputs/SerieUpdateOneRequiredWithoutSeasonsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class SeasonUpdateWithoutEpisodeIdsInput {
    title?: StringFieldUpdateOperationsInput | undefined;
    index?: IntFieldUpdateOperationsInput | undefined;
    episodes?: IntFieldUpdateOperationsInput | undefined;
    launchDate?: DateTimeFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    series?: SerieUpdateOneRequiredWithoutSeasonsInput | undefined;
}
