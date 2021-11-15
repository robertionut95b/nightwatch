import { MovieCreateNestedManyWithoutActorsInput } from "../inputs/MovieCreateNestedManyWithoutActorsInput";
import { SerieCreateNestedOneWithoutActorsInput } from "../inputs/SerieCreateNestedOneWithoutActorsInput";
export declare class ActorCreateInput {
    name: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    movies?: MovieCreateNestedManyWithoutActorsInput | undefined;
    series?: SerieCreateNestedOneWithoutActorsInput | undefined;
}
