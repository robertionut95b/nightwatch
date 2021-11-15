import { SerieAvgAggregate } from "../outputs/SerieAvgAggregate";
import { SerieCountAggregate } from "../outputs/SerieCountAggregate";
import { SerieMaxAggregate } from "../outputs/SerieMaxAggregate";
import { SerieMinAggregate } from "../outputs/SerieMinAggregate";
import { SerieSumAggregate } from "../outputs/SerieSumAggregate";
export declare class AggregateSerie {
    _count: SerieCountAggregate | null;
    _avg: SerieAvgAggregate | null;
    _sum: SerieSumAggregate | null;
    _min: SerieMinAggregate | null;
    _max: SerieMaxAggregate | null;
}
