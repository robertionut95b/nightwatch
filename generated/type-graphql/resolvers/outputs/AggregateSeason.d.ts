import { SeasonAvgAggregate } from "../outputs/SeasonAvgAggregate";
import { SeasonCountAggregate } from "../outputs/SeasonCountAggregate";
import { SeasonMaxAggregate } from "../outputs/SeasonMaxAggregate";
import { SeasonMinAggregate } from "../outputs/SeasonMinAggregate";
import { SeasonSumAggregate } from "../outputs/SeasonSumAggregate";
export declare class AggregateSeason {
    _count: SeasonCountAggregate | null;
    _avg: SeasonAvgAggregate | null;
    _sum: SeasonSumAggregate | null;
    _min: SeasonMinAggregate | null;
    _max: SeasonMaxAggregate | null;
}
