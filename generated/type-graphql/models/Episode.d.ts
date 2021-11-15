import { Season } from "../models/Season";
export declare class Episode {
    id: number;
    title: string;
    runtime: number;
    plot: string;
    poster: string;
    imdbRating: number;
    season?: Season;
    seasonId: number;
}
