import { LanguageAvgAggregate } from "../outputs/LanguageAvgAggregate";
import { LanguageCountAggregate } from "../outputs/LanguageCountAggregate";
import { LanguageMaxAggregate } from "../outputs/LanguageMaxAggregate";
import { LanguageMinAggregate } from "../outputs/LanguageMinAggregate";
import { LanguageSumAggregate } from "../outputs/LanguageSumAggregate";
export declare class LanguageGroupBy {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    seriesId: number | null;
    _count: LanguageCountAggregate | null;
    _avg: LanguageAvgAggregate | null;
    _sum: LanguageSumAggregate | null;
    _min: LanguageMinAggregate | null;
    _max: LanguageMaxAggregate | null;
}
