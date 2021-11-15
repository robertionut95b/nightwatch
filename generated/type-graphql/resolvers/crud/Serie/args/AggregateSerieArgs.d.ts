import { SerieOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/SerieOrderByWithRelationAndSearchRelevanceInput";
import { SerieWhereInput } from "../../../inputs/SerieWhereInput";
import { SerieWhereUniqueInput } from "../../../inputs/SerieWhereUniqueInput";
export declare class AggregateSerieArgs {
    where?: SerieWhereInput | undefined;
    orderBy?: SerieOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: SerieWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
