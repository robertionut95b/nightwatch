import { MovieCreateNestedManyWithoutActorsInput } from "../inputs/MovieCreateNestedManyWithoutActorsInput";
export declare class ActorCreateWithoutSeriesInput {
    name: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    movies?: MovieCreateNestedManyWithoutActorsInput | undefined;
}
