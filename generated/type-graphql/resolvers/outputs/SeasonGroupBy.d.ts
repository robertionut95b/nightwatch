import { SeasonAvgAggregate } from "../outputs/SeasonAvgAggregate";
import { SeasonCountAggregate } from "../outputs/SeasonCountAggregate";
import { SeasonMaxAggregate } from "../outputs/SeasonMaxAggregate";
import { SeasonMinAggregate } from "../outputs/SeasonMinAggregate";
import { SeasonSumAggregate } from "../outputs/SeasonSumAggregate";
export declare class SeasonGroupBy {
    id: number;
    title: string;
    index: number;
    episodes: number;
    seriesId: number;
    launchDate: Date;
    createdAt: Date;
    updatedAt: Date;
    _count: SeasonCountAggregate | null;
    _avg: SeasonAvgAggregate | null;
    _sum: SeasonSumAggregate | null;
    _min: SeasonMinAggregate | null;
    _max: SeasonMaxAggregate | null;
}
