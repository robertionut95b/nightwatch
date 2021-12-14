import { SerieAvgAggregate } from "../outputs/SerieAvgAggregate";
import { SerieCountAggregate } from "../outputs/SerieCountAggregate";
import { SerieMaxAggregate } from "../outputs/SerieMaxAggregate";
import { SerieMinAggregate } from "../outputs/SerieMinAggregate";
import { SerieSumAggregate } from "../outputs/SerieSumAggregate";
export declare class SerieGroupBy {
    id: number;
    title: string;
    year: number;
    rating: string;
    release: Date;
    runtime: number;
    plot: string;
    poster: string;
    imdbRating: number;
    imdbID: string;
    totalSeasons: number;
    createdAt: Date;
    updatedAt: Date;
    _count: SerieCountAggregate | null;
    _avg: SerieAvgAggregate | null;
    _sum: SerieSumAggregate | null;
    _min: SerieMinAggregate | null;
    _max: SerieMaxAggregate | null;
}
