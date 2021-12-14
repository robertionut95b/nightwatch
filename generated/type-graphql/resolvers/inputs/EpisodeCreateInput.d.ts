import { SeasonCreateNestedOneWithoutEpisodeIdsInput } from "../inputs/SeasonCreateNestedOneWithoutEpisodeIdsInput";
export declare class EpisodeCreateInput {
    title: string;
    runtime: number;
    plot: string;
    poster: string;
    imdbRating: number;
    imdbID: string;
    season: SeasonCreateNestedOneWithoutEpisodeIdsInput;
}
