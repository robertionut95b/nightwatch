import { MovieCreateOrConnectWithoutGenresInput } from "../inputs/MovieCreateOrConnectWithoutGenresInput";
import { MovieCreateWithoutGenresInput } from "../inputs/MovieCreateWithoutGenresInput";
import { MovieScalarWhereInput } from "../inputs/MovieScalarWhereInput";
import { MovieUpdateManyWithWhereWithoutGenresInput } from "../inputs/MovieUpdateManyWithWhereWithoutGenresInput";
import { MovieUpdateWithWhereUniqueWithoutGenresInput } from "../inputs/MovieUpdateWithWhereUniqueWithoutGenresInput";
import { MovieUpsertWithWhereUniqueWithoutGenresInput } from "../inputs/MovieUpsertWithWhereUniqueWithoutGenresInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";
export declare class MovieUpdateManyWithoutGenresInput {
    create?: MovieCreateWithoutGenresInput[] | undefined;
    connectOrCreate?: MovieCreateOrConnectWithoutGenresInput[] | undefined;
    upsert?: MovieUpsertWithWhereUniqueWithoutGenresInput[] | undefined;
    connect?: MovieWhereUniqueInput[] | undefined;
    set?: MovieWhereUniqueInput[] | undefined;
    disconnect?: MovieWhereUniqueInput[] | undefined;
    delete?: MovieWhereUniqueInput[] | undefined;
    update?: MovieUpdateWithWhereUniqueWithoutGenresInput[] | undefined;
    updateMany?: MovieUpdateManyWithWhereWithoutGenresInput[] | undefined;
    deleteMany?: MovieScalarWhereInput[] | undefined;
}
