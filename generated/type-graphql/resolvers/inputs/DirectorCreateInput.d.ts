import { MovieCreateNestedManyWithoutDirectorsInput } from "../inputs/MovieCreateNestedManyWithoutDirectorsInput";
import { SerieCreateNestedOneWithoutDirectorsInput } from "../inputs/SerieCreateNestedOneWithoutDirectorsInput";
export declare class DirectorCreateInput {
    name: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    movies?: MovieCreateNestedManyWithoutDirectorsInput | undefined;
    series?: SerieCreateNestedOneWithoutDirectorsInput | undefined;
}
