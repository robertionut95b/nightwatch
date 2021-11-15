import { MovieCreateOrConnectWithoutActorsInput } from "../inputs/MovieCreateOrConnectWithoutActorsInput";
import { MovieCreateWithoutActorsInput } from "../inputs/MovieCreateWithoutActorsInput";
import { MovieScalarWhereInput } from "../inputs/MovieScalarWhereInput";
import { MovieUpdateManyWithWhereWithoutActorsInput } from "../inputs/MovieUpdateManyWithWhereWithoutActorsInput";
import { MovieUpdateWithWhereUniqueWithoutActorsInput } from "../inputs/MovieUpdateWithWhereUniqueWithoutActorsInput";
import { MovieUpsertWithWhereUniqueWithoutActorsInput } from "../inputs/MovieUpsertWithWhereUniqueWithoutActorsInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";
export declare class MovieUpdateManyWithoutActorsInput {
    create?: MovieCreateWithoutActorsInput[] | undefined;
    connectOrCreate?: MovieCreateOrConnectWithoutActorsInput[] | undefined;
    upsert?: MovieUpsertWithWhereUniqueWithoutActorsInput[] | undefined;
    connect?: MovieWhereUniqueInput[] | undefined;
    set?: MovieWhereUniqueInput[] | undefined;
    disconnect?: MovieWhereUniqueInput[] | undefined;
    delete?: MovieWhereUniqueInput[] | undefined;
    update?: MovieUpdateWithWhereUniqueWithoutActorsInput[] | undefined;
    updateMany?: MovieUpdateManyWithWhereWithoutActorsInput[] | undefined;
    deleteMany?: MovieScalarWhereInput[] | undefined;
}
