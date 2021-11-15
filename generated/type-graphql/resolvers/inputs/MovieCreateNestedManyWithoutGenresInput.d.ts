import { MovieCreateOrConnectWithoutGenresInput } from "../inputs/MovieCreateOrConnectWithoutGenresInput";
import { MovieCreateWithoutGenresInput } from "../inputs/MovieCreateWithoutGenresInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";
export declare class MovieCreateNestedManyWithoutGenresInput {
    create?: MovieCreateWithoutGenresInput[] | undefined;
    connectOrCreate?: MovieCreateOrConnectWithoutGenresInput[] | undefined;
    connect?: MovieWhereUniqueInput[] | undefined;
}
