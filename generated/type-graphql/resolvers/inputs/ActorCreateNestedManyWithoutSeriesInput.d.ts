import { ActorCreateManySeriesInputEnvelope } from "../inputs/ActorCreateManySeriesInputEnvelope";
import { ActorCreateOrConnectWithoutSeriesInput } from "../inputs/ActorCreateOrConnectWithoutSeriesInput";
import { ActorCreateWithoutSeriesInput } from "../inputs/ActorCreateWithoutSeriesInput";
import { ActorWhereUniqueInput } from "../inputs/ActorWhereUniqueInput";
export declare class ActorCreateNestedManyWithoutSeriesInput {
    create?: ActorCreateWithoutSeriesInput[] | undefined;
    connectOrCreate?: ActorCreateOrConnectWithoutSeriesInput[] | undefined;
    createMany?: ActorCreateManySeriesInputEnvelope | undefined;
    connect?: ActorWhereUniqueInput[] | undefined;
}
