import { SerieCreateNestedOneWithoutSeasonsInput } from "../inputs/SerieCreateNestedOneWithoutSeasonsInput";
export declare class SeasonCreateWithoutEpisodeIdsInput {
    title: string;
    index: number;
    episodes: number;
    launchDate?: Date | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    series: SerieCreateNestedOneWithoutSeasonsInput;
}
