import { ActorUpdateManyWithoutSeriesInput } from "../inputs/ActorUpdateManyWithoutSeriesInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DirectorUpdateManyWithoutSeriesInput } from "../inputs/DirectorUpdateManyWithoutSeriesInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { GenreUpdateManyWithoutSeriesInput } from "../inputs/GenreUpdateManyWithoutSeriesInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { LanguageUpdateManyWithoutSeriesInput } from "../inputs/LanguageUpdateManyWithoutSeriesInput";
import { SeasonUpdateManyWithoutSeriesInput } from "../inputs/SeasonUpdateManyWithoutSeriesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class SerieUpdateInput {
    title?: StringFieldUpdateOperationsInput | undefined;
    year?: IntFieldUpdateOperationsInput | undefined;
    rating?: StringFieldUpdateOperationsInput | undefined;
    release?: DateTimeFieldUpdateOperationsInput | undefined;
    runtime?: IntFieldUpdateOperationsInput | undefined;
    plot?: StringFieldUpdateOperationsInput | undefined;
    poster?: StringFieldUpdateOperationsInput | undefined;
    imdbRating?: FloatFieldUpdateOperationsInput | undefined;
    imdbID?: StringFieldUpdateOperationsInput | undefined;
    totalSeasons?: IntFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    genres?: GenreUpdateManyWithoutSeriesInput | undefined;
    directors?: DirectorUpdateManyWithoutSeriesInput | undefined;
    actors?: ActorUpdateManyWithoutSeriesInput | undefined;
    languages?: LanguageUpdateManyWithoutSeriesInput | undefined;
    seasons?: SeasonUpdateManyWithoutSeriesInput | undefined;
}
