import { DirectorCreateOrConnectWithoutMoviesInput } from "../inputs/DirectorCreateOrConnectWithoutMoviesInput";
import { DirectorCreateWithoutMoviesInput } from "../inputs/DirectorCreateWithoutMoviesInput";
import { DirectorScalarWhereInput } from "../inputs/DirectorScalarWhereInput";
import { DirectorUpdateManyWithWhereWithoutMoviesInput } from "../inputs/DirectorUpdateManyWithWhereWithoutMoviesInput";
import { DirectorUpdateWithWhereUniqueWithoutMoviesInput } from "../inputs/DirectorUpdateWithWhereUniqueWithoutMoviesInput";
import { DirectorUpsertWithWhereUniqueWithoutMoviesInput } from "../inputs/DirectorUpsertWithWhereUniqueWithoutMoviesInput";
import { DirectorWhereUniqueInput } from "../inputs/DirectorWhereUniqueInput";
export declare class DirectorUpdateManyWithoutMoviesInput {
    create?: DirectorCreateWithoutMoviesInput[] | undefined;
    connectOrCreate?: DirectorCreateOrConnectWithoutMoviesInput[] | undefined;
    upsert?: DirectorUpsertWithWhereUniqueWithoutMoviesInput[] | undefined;
    connect?: DirectorWhereUniqueInput[] | undefined;
    set?: DirectorWhereUniqueInput[] | undefined;
    disconnect?: DirectorWhereUniqueInput[] | undefined;
    delete?: DirectorWhereUniqueInput[] | undefined;
    update?: DirectorUpdateWithWhereUniqueWithoutMoviesInput[] | undefined;
    updateMany?: DirectorUpdateManyWithWhereWithoutMoviesInput[] | undefined;
    deleteMany?: DirectorScalarWhereInput[] | undefined;
}
