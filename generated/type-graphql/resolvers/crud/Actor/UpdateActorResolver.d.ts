import { GraphQLResolveInfo } from "graphql";
import { UpdateActorArgs } from "./args/UpdateActorArgs";
import { Actor } from "../../../models/Actor";
export declare class UpdateActorResolver {
    updateActor(ctx: any, info: GraphQLResolveInfo, args: UpdateActorArgs): Promise<Actor | null>;
}
