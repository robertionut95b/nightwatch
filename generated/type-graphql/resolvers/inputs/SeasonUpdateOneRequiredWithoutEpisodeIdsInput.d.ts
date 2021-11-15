import { SeasonCreateOrConnectWithoutEpisodeIdsInput } from "../inputs/SeasonCreateOrConnectWithoutEpisodeIdsInput";
import { SeasonCreateWithoutEpisodeIdsInput } from "../inputs/SeasonCreateWithoutEpisodeIdsInput";
import { SeasonUpdateWithoutEpisodeIdsInput } from "../inputs/SeasonUpdateWithoutEpisodeIdsInput";
import { SeasonUpsertWithoutEpisodeIdsInput } from "../inputs/SeasonUpsertWithoutEpisodeIdsInput";
import { SeasonWhereUniqueInput } from "../inputs/SeasonWhereUniqueInput";
export declare class SeasonUpdateOneRequiredWithoutEpisodeIdsInput {
    create?: SeasonCreateWithoutEpisodeIdsInput | undefined;
    connectOrCreate?: SeasonCreateOrConnectWithoutEpisodeIdsInput | undefined;
    upsert?: SeasonUpsertWithoutEpisodeIdsInput | undefined;
    connect?: SeasonWhereUniqueInput | undefined;
    update?: SeasonUpdateWithoutEpisodeIdsInput | undefined;
}
