import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { SeasonUpdateOneRequiredWithoutEpisodeIdsInput } from "../inputs/SeasonUpdateOneRequiredWithoutEpisodeIdsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class EpisodeUpdateInput {
    title?: StringFieldUpdateOperationsInput | undefined;
    runtime?: IntFieldUpdateOperationsInput | undefined;
    plot?: StringFieldUpdateOperationsInput | undefined;
    poster?: StringFieldUpdateOperationsInput | undefined;
    imdbRating?: FloatFieldUpdateOperationsInput | undefined;
    imdbID?: StringFieldUpdateOperationsInput | undefined;
    season?: SeasonUpdateOneRequiredWithoutEpisodeIdsInput | undefined;
}
