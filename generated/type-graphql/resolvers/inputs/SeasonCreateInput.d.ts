import { EpisodeCreateNestedManyWithoutSeasonInput } from "../inputs/EpisodeCreateNestedManyWithoutSeasonInput";
import { SerieCreateNestedOneWithoutSeasonsInput } from "../inputs/SerieCreateNestedOneWithoutSeasonsInput";
export declare class SeasonCreateInput {
    title: string;
    index: number;
    episodes: number;
    launchDate?: Date | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    episodeIds?: EpisodeCreateNestedManyWithoutSeasonInput | undefined;
    series: SerieCreateNestedOneWithoutSeasonsInput;
}
