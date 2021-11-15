import { MovieOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/MovieOrderByWithRelationAndSearchRelevanceInput";
import { MovieWhereInput } from "../../../inputs/MovieWhereInput";
import { MovieWhereUniqueInput } from "../../../inputs/MovieWhereUniqueInput";
export declare class AggregateMovieArgs {
    where?: MovieWhereInput | undefined;
    orderBy?: MovieOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: MovieWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
