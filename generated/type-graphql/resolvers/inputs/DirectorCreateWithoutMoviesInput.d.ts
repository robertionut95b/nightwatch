import { SerieCreateNestedOneWithoutDirectorsInput } from "../inputs/SerieCreateNestedOneWithoutDirectorsInput";
export declare class DirectorCreateWithoutMoviesInput {
    name: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    series?: SerieCreateNestedOneWithoutDirectorsInput | undefined;
}
