import { UserOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/UserOrderByWithRelationAndSearchRelevanceInput";
import { UserWhereInput } from "../../../inputs/UserWhereInput";
import { UserWhereUniqueInput } from "../../../inputs/UserWhereUniqueInput";
export declare class AggregateUserArgs {
    where?: UserWhereInput | undefined;
    orderBy?: UserOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: UserWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
