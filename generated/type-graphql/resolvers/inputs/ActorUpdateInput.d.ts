import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MovieUpdateManyWithoutActorsInput } from "../inputs/MovieUpdateManyWithoutActorsInput";
import { SerieUpdateOneWithoutActorsInput } from "../inputs/SerieUpdateOneWithoutActorsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ActorUpdateInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    movies?: MovieUpdateManyWithoutActorsInput | undefined;
    series?: SerieUpdateOneWithoutActorsInput | undefined;
}
