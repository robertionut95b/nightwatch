import { EpisodeCreateNestedManyWithoutSeasonInput } from "../inputs/EpisodeCreateNestedManyWithoutSeasonInput";
export declare class SeasonCreateWithoutSeriesInput {
    title: string;
    index: number;
    episodes: number;
    launchDate?: Date | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    episodeIds?: EpisodeCreateNestedManyWithoutSeasonInput | undefined;
}
