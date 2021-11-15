import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EpisodeUpdateManyWithoutSeasonInput } from "../inputs/EpisodeUpdateManyWithoutSeasonInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { SerieUpdateOneRequiredWithoutSeasonsInput } from "../inputs/SerieUpdateOneRequiredWithoutSeasonsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class SeasonUpdateInput {
    title?: StringFieldUpdateOperationsInput | undefined;
    index?: IntFieldUpdateOperationsInput | undefined;
    episodes?: IntFieldUpdateOperationsInput | undefined;
    launchDate?: DateTimeFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    episodeIds?: EpisodeUpdateManyWithoutSeasonInput | undefined;
    series?: SerieUpdateOneRequiredWithoutSeasonsInput | undefined;
}
