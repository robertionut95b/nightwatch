import { ActorAvgAggregate } from "../outputs/ActorAvgAggregate";
import { ActorCountAggregate } from "../outputs/ActorCountAggregate";
import { ActorMaxAggregate } from "../outputs/ActorMaxAggregate";
import { ActorMinAggregate } from "../outputs/ActorMinAggregate";
import { ActorSumAggregate } from "../outputs/ActorSumAggregate";
export declare class AggregateActor {
    _count: ActorCountAggregate | null;
    _avg: ActorAvgAggregate | null;
    _sum: ActorSumAggregate | null;
    _min: ActorMinAggregate | null;
    _max: ActorMaxAggregate | null;
}
