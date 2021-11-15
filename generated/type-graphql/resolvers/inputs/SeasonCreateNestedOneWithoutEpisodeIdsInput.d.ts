import { SeasonCreateOrConnectWithoutEpisodeIdsInput } from "../inputs/SeasonCreateOrConnectWithoutEpisodeIdsInput";
import { SeasonCreateWithoutEpisodeIdsInput } from "../inputs/SeasonCreateWithoutEpisodeIdsInput";
import { SeasonWhereUniqueInput } from "../inputs/SeasonWhereUniqueInput";
export declare class SeasonCreateNestedOneWithoutEpisodeIdsInput {
    create?: SeasonCreateWithoutEpisodeIdsInput | undefined;
    connectOrCreate?: SeasonCreateOrConnectWithoutEpisodeIdsInput | undefined;
    connect?: SeasonWhereUniqueInput | undefined;
}
