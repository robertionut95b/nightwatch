import { SeasonOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/SeasonOrderByWithRelationAndSearchRelevanceInput";
import { SeasonWhereInput } from "../../../inputs/SeasonWhereInput";
import { SeasonWhereUniqueInput } from "../../../inputs/SeasonWhereUniqueInput";
export declare class AggregateSeasonArgs {
    where?: SeasonWhereInput | undefined;
    orderBy?: SeasonOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: SeasonWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
