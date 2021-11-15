import { GenreAvgAggregate } from "../outputs/GenreAvgAggregate";
import { GenreCountAggregate } from "../outputs/GenreCountAggregate";
import { GenreMaxAggregate } from "../outputs/GenreMaxAggregate";
import { GenreMinAggregate } from "../outputs/GenreMinAggregate";
import { GenreSumAggregate } from "../outputs/GenreSumAggregate";
export declare class GenreGroupBy {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    _count: GenreCountAggregate | null;
    _avg: GenreAvgAggregate | null;
    _sum: GenreSumAggregate | null;
    _min: GenreMinAggregate | null;
    _max: GenreMaxAggregate | null;
}
