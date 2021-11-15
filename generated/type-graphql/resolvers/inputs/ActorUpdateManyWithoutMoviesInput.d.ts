import { ActorCreateOrConnectWithoutMoviesInput } from "../inputs/ActorCreateOrConnectWithoutMoviesInput";
import { ActorCreateWithoutMoviesInput } from "../inputs/ActorCreateWithoutMoviesInput";
import { ActorScalarWhereInput } from "../inputs/ActorScalarWhereInput";
import { ActorUpdateManyWithWhereWithoutMoviesInput } from "../inputs/ActorUpdateManyWithWhereWithoutMoviesInput";
import { ActorUpdateWithWhereUniqueWithoutMoviesInput } from "../inputs/ActorUpdateWithWhereUniqueWithoutMoviesInput";
import { ActorUpsertWithWhereUniqueWithoutMoviesInput } from "../inputs/ActorUpsertWithWhereUniqueWithoutMoviesInput";
import { ActorWhereUniqueInput } from "../inputs/ActorWhereUniqueInput";
export declare class ActorUpdateManyWithoutMoviesInput {
    create?: ActorCreateWithoutMoviesInput[] | undefined;
    connectOrCreate?: ActorCreateOrConnectWithoutMoviesInput[] | undefined;
    upsert?: ActorUpsertWithWhereUniqueWithoutMoviesInput[] | undefined;
    connect?: ActorWhereUniqueInput[] | undefined;
    set?: ActorWhereUniqueInput[] | undefined;
    disconnect?: ActorWhereUniqueInput[] | undefined;
    delete?: ActorWhereUniqueInput[] | undefined;
    update?: ActorUpdateWithWhereUniqueWithoutMoviesInput[] | undefined;
    updateMany?: ActorUpdateManyWithWhereWithoutMoviesInput[] | undefined;
    deleteMany?: ActorScalarWhereInput[] | undefined;
}
