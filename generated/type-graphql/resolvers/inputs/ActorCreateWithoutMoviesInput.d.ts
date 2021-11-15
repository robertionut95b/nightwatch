import { SerieCreateNestedOneWithoutActorsInput } from "../inputs/SerieCreateNestedOneWithoutActorsInput";
export declare class ActorCreateWithoutMoviesInput {
    name: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    series?: SerieCreateNestedOneWithoutActorsInput | undefined;
}
