import { ActorAvgAggregate } from "../outputs/ActorAvgAggregate";
import { ActorCountAggregate } from "../outputs/ActorCountAggregate";
import { ActorMaxAggregate } from "../outputs/ActorMaxAggregate";
import { ActorMinAggregate } from "../outputs/ActorMinAggregate";
import { ActorSumAggregate } from "../outputs/ActorSumAggregate";
export declare class ActorGroupBy {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    seriesId: number | null;
    _count: ActorCountAggregate | null;
    _avg: ActorAvgAggregate | null;
    _sum: ActorSumAggregate | null;
    _min: ActorMinAggregate | null;
    _max: ActorMaxAggregate | null;
}
