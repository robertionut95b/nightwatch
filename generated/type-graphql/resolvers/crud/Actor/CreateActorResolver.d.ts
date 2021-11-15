import { GraphQLResolveInfo } from "graphql";
import { CreateActorArgs } from "./args/CreateActorArgs";
import { Actor } from "../../../models/Actor";
export declare class CreateActorResolver {
    createActor(ctx: any, info: GraphQLResolveInfo, args: CreateActorArgs): Promise<Actor>;
}
