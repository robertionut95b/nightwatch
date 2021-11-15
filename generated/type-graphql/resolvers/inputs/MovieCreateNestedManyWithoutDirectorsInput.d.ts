import { MovieCreateOrConnectWithoutDirectorsInput } from "../inputs/MovieCreateOrConnectWithoutDirectorsInput";
import { MovieCreateWithoutDirectorsInput } from "../inputs/MovieCreateWithoutDirectorsInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";
export declare class MovieCreateNestedManyWithoutDirectorsInput {
    create?: MovieCreateWithoutDirectorsInput[] | undefined;
    connectOrCreate?: MovieCreateOrConnectWithoutDirectorsInput[] | undefined;
    connect?: MovieWhereUniqueInput[] | undefined;
}
