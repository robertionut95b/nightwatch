import { ActorCreateInput } from "../../../inputs/ActorCreateInput";
import { ActorUpdateInput } from "../../../inputs/ActorUpdateInput";
import { ActorWhereUniqueInput } from "../../../inputs/ActorWhereUniqueInput";
export declare class UpsertActorArgs {
    where: ActorWhereUniqueInput;
    create: ActorCreateInput;
    update: ActorUpdateInput;
}
