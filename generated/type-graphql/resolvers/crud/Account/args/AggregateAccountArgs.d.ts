import { AccountOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/AccountOrderByWithRelationAndSearchRelevanceInput";
import { AccountWhereInput } from "../../../inputs/AccountWhereInput";
import { AccountWhereUniqueInput } from "../../../inputs/AccountWhereUniqueInput";
export declare class AggregateAccountArgs {
    where?: AccountWhereInput | undefined;
    orderBy?: AccountOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: AccountWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
