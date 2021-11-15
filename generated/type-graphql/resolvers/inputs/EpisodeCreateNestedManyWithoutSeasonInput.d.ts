import { EpisodeCreateManySeasonInputEnvelope } from "../inputs/EpisodeCreateManySeasonInputEnvelope";
import { EpisodeCreateOrConnectWithoutSeasonInput } from "../inputs/EpisodeCreateOrConnectWithoutSeasonInput";
import { EpisodeCreateWithoutSeasonInput } from "../inputs/EpisodeCreateWithoutSeasonInput";
import { EpisodeWhereUniqueInput } from "../inputs/EpisodeWhereUniqueInput";
export declare class EpisodeCreateNestedManyWithoutSeasonInput {
    create?: EpisodeCreateWithoutSeasonInput[] | undefined;
    connectOrCreate?: EpisodeCreateOrConnectWithoutSeasonInput[] | undefined;
    createMany?: EpisodeCreateManySeasonInputEnvelope | undefined;
    connect?: EpisodeWhereUniqueInput[] | undefined;
}
