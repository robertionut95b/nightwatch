import { MovieCreateOrConnectWithoutActorsInput } from "../inputs/MovieCreateOrConnectWithoutActorsInput";
import { MovieCreateWithoutActorsInput } from "../inputs/MovieCreateWithoutActorsInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";
export declare class MovieCreateNestedManyWithoutActorsInput {
    create?: MovieCreateWithoutActorsInput[] | undefined;
    connectOrCreate?: MovieCreateOrConnectWithoutActorsInput[] | undefined;
    connect?: MovieWhereUniqueInput[] | undefined;
}
