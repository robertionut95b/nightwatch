import { EpisodeCreateManySeasonInputEnvelope } from "../inputs/EpisodeCreateManySeasonInputEnvelope";
import { EpisodeCreateOrConnectWithoutSeasonInput } from "../inputs/EpisodeCreateOrConnectWithoutSeasonInput";
import { EpisodeCreateWithoutSeasonInput } from "../inputs/EpisodeCreateWithoutSeasonInput";
import { EpisodeScalarWhereInput } from "../inputs/EpisodeScalarWhereInput";
import { EpisodeUpdateManyWithWhereWithoutSeasonInput } from "../inputs/EpisodeUpdateManyWithWhereWithoutSeasonInput";
import { EpisodeUpdateWithWhereUniqueWithoutSeasonInput } from "../inputs/EpisodeUpdateWithWhereUniqueWithoutSeasonInput";
import { EpisodeUpsertWithWhereUniqueWithoutSeasonInput } from "../inputs/EpisodeUpsertWithWhereUniqueWithoutSeasonInput";
import { EpisodeWhereUniqueInput } from "../inputs/EpisodeWhereUniqueInput";
export declare class EpisodeUpdateManyWithoutSeasonInput {
    create?: EpisodeCreateWithoutSeasonInput[] | undefined;
    connectOrCreate?: EpisodeCreateOrConnectWithoutSeasonInput[] | undefined;
    upsert?: EpisodeUpsertWithWhereUniqueWithoutSeasonInput[] | undefined;
    createMany?: EpisodeCreateManySeasonInputEnvelope | undefined;
    connect?: EpisodeWhereUniqueInput[] | undefined;
    set?: EpisodeWhereUniqueInput[] | undefined;
    disconnect?: EpisodeWhereUniqueInput[] | undefined;
    delete?: EpisodeWhereUniqueInput[] | undefined;
    update?: EpisodeUpdateWithWhereUniqueWithoutSeasonInput[] | undefined;
    updateMany?: EpisodeUpdateManyWithWhereWithoutSeasonInput[] | undefined;
    deleteMany?: EpisodeScalarWhereInput[] | undefined;
}
