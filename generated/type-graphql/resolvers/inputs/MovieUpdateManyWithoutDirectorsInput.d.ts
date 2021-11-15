import { MovieCreateOrConnectWithoutDirectorsInput } from "../inputs/MovieCreateOrConnectWithoutDirectorsInput";
import { MovieCreateWithoutDirectorsInput } from "../inputs/MovieCreateWithoutDirectorsInput";
import { MovieScalarWhereInput } from "../inputs/MovieScalarWhereInput";
import { MovieUpdateManyWithWhereWithoutDirectorsInput } from "../inputs/MovieUpdateManyWithWhereWithoutDirectorsInput";
import { MovieUpdateWithWhereUniqueWithoutDirectorsInput } from "../inputs/MovieUpdateWithWhereUniqueWithoutDirectorsInput";
import { MovieUpsertWithWhereUniqueWithoutDirectorsInput } from "../inputs/MovieUpsertWithWhereUniqueWithoutDirectorsInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";
export declare class MovieUpdateManyWithoutDirectorsInput {
    create?: MovieCreateWithoutDirectorsInput[] | undefined;
    connectOrCreate?: MovieCreateOrConnectWithoutDirectorsInput[] | undefined;
    upsert?: MovieUpsertWithWhereUniqueWithoutDirectorsInput[] | undefined;
    connect?: MovieWhereUniqueInput[] | undefined;
    set?: MovieWhereUniqueInput[] | undefined;
    disconnect?: MovieWhereUniqueInput[] | undefined;
    delete?: MovieWhereUniqueInput[] | undefined;
    update?: MovieUpdateWithWhereUniqueWithoutDirectorsInput[] | undefined;
    updateMany?: MovieUpdateManyWithWhereWithoutDirectorsInput[] | undefined;
    deleteMany?: MovieScalarWhereInput[] | undefined;
}
