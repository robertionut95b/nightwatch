import { MovieCreateNestedManyWithoutDirectorsInput } from "../inputs/MovieCreateNestedManyWithoutDirectorsInput";
export declare class DirectorCreateWithoutSeriesInput {
    name: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    movies?: MovieCreateNestedManyWithoutDirectorsInput | undefined;
}
