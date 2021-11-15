import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DirectorUpdateManyWithoutMoviesInput } from "../inputs/DirectorUpdateManyWithoutMoviesInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { GenreUpdateManyWithoutMoviesInput } from "../inputs/GenreUpdateManyWithoutMoviesInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { LanguageUpdateManyWithoutMoviesInput } from "../inputs/LanguageUpdateManyWithoutMoviesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class MovieUpdateWithoutActorsInput {
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
    genres?: GenreUpdateManyWithoutMoviesInput | undefined;
    directors?: DirectorUpdateManyWithoutMoviesInput | undefined;
    languages?: LanguageUpdateManyWithoutMoviesInput | undefined;
}
