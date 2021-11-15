import { MovieAvgAggregate } from "../outputs/MovieAvgAggregate";
import { MovieCountAggregate } from "../outputs/MovieCountAggregate";
import { MovieMaxAggregate } from "../outputs/MovieMaxAggregate";
import { MovieMinAggregate } from "../outputs/MovieMinAggregate";
import { MovieSumAggregate } from "../outputs/MovieSumAggregate";
export declare class MovieGroupBy {
    id: number;
    title: string;
    year: number;
    rating: string;
    release: Date;
    runtime: number;
    plot: string;
    poster: string;
    imdbRating: number;
    createdAt: Date;
    updatedAt: Date;
    _count: MovieCountAggregate | null;
    _avg: MovieAvgAggregate | null;
    _sum: MovieSumAggregate | null;
    _min: MovieMinAggregate | null;
    _max: MovieMaxAggregate | null;
}
