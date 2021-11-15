import { ActorCreateManySeriesInputEnvelope } from "../inputs/ActorCreateManySeriesInputEnvelope";
import { ActorCreateOrConnectWithoutSeriesInput } from "../inputs/ActorCreateOrConnectWithoutSeriesInput";
import { ActorCreateWithoutSeriesInput } from "../inputs/ActorCreateWithoutSeriesInput";
import { ActorScalarWhereInput } from "../inputs/ActorScalarWhereInput";
import { ActorUpdateManyWithWhereWithoutSeriesInput } from "../inputs/ActorUpdateManyWithWhereWithoutSeriesInput";
import { ActorUpdateWithWhereUniqueWithoutSeriesInput } from "../inputs/ActorUpdateWithWhereUniqueWithoutSeriesInput";
import { ActorUpsertWithWhereUniqueWithoutSeriesInput } from "../inputs/ActorUpsertWithWhereUniqueWithoutSeriesInput";
import { ActorWhereUniqueInput } from "../inputs/ActorWhereUniqueInput";
export declare class ActorUpdateManyWithoutSeriesInput {
    create?: ActorCreateWithoutSeriesInput[] | undefined;
    connectOrCreate?: ActorCreateOrConnectWithoutSeriesInput[] | undefined;
    upsert?: ActorUpsertWithWhereUniqueWithoutSeriesInput[] | undefined;
    createMany?: ActorCreateManySeriesInputEnvelope | undefined;
    connect?: ActorWhereUniqueInput[] | undefined;
    set?: ActorWhereUniqueInput[] | undefined;
    disconnect?: ActorWhereUniqueInput[] | undefined;
    delete?: ActorWhereUniqueInput[] | undefined;
    update?: ActorUpdateWithWhereUniqueWithoutSeriesInput[] | undefined;
    updateMany?: ActorUpdateManyWithWhereWithoutSeriesInput[] | undefined;
    deleteMany?: ActorScalarWhereInput[] | undefined;
}
