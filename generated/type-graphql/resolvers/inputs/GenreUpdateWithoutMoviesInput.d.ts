import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { SerieUpdateManyWithoutGenresInput } from "../inputs/SerieUpdateManyWithoutGenresInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class GenreUpdateWithoutMoviesInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    series?: SerieUpdateManyWithoutGenresInput | undefined;
}
