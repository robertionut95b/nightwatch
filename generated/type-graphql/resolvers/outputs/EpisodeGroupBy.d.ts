import { EpisodeAvgAggregate } from "../outputs/EpisodeAvgAggregate";
import { EpisodeCountAggregate } from "../outputs/EpisodeCountAggregate";
import { EpisodeMaxAggregate } from "../outputs/EpisodeMaxAggregate";
import { EpisodeMinAggregate } from "../outputs/EpisodeMinAggregate";
import { EpisodeSumAggregate } from "../outputs/EpisodeSumAggregate";
export declare class EpisodeGroupBy {
    id: number;
    title: string;
    runtime: number;
    plot: string;
    poster: string;
    imdbRating: number;
    imdbID: string;
    seasonId: number;
    _count: EpisodeCountAggregate | null;
    _avg: EpisodeAvgAggregate | null;
    _sum: EpisodeSumAggregate | null;
    _min: EpisodeMinAggregate | null;
    _max: EpisodeMaxAggregate | null;
}
