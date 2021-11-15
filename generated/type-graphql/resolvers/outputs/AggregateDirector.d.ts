import { DirectorAvgAggregate } from "../outputs/DirectorAvgAggregate";
import { DirectorCountAggregate } from "../outputs/DirectorCountAggregate";
import { DirectorMaxAggregate } from "../outputs/DirectorMaxAggregate";
import { DirectorMinAggregate } from "../outputs/DirectorMinAggregate";
import { DirectorSumAggregate } from "../outputs/DirectorSumAggregate";
export declare class AggregateDirector {
    _count: DirectorCountAggregate | null;
    _avg: DirectorAvgAggregate | null;
    _sum: DirectorSumAggregate | null;
    _min: DirectorMinAggregate | null;
    _max: DirectorMaxAggregate | null;
}
