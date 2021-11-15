import { ActorOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ActorOrderByWithRelationAndSearchRelevanceInput";
import { ActorWhereInput } from "../../../inputs/ActorWhereInput";
import { ActorWhereUniqueInput } from "../../../inputs/ActorWhereUniqueInput";
export declare class AggregateActorArgs {
    where?: ActorWhereInput | undefined;
    orderBy?: ActorOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: ActorWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
