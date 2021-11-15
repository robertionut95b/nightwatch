import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MovieUpdateManyWithoutGenresInput } from "../inputs/MovieUpdateManyWithoutGenresInput";
import { SerieUpdateManyWithoutGenresInput } from "../inputs/SerieUpdateManyWithoutGenresInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class GenreUpdateInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    movies?: MovieUpdateManyWithoutGenresInput | undefined;
    series?: SerieUpdateManyWithoutGenresInput | undefined;
}
