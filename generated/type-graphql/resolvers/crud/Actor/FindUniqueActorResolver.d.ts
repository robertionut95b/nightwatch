import { GraphQLResolveInfo } from "graphql";
import { FindUniqueActorArgs } from "./args/FindUniqueActorArgs";
import { Actor } from "../../../models/Actor";
export declare class FindUniqueActorResolver {
    actor(ctx: any, info: GraphQLResolveInfo, args: FindUniqueActorArgs): Promise<Actor | null>;
}
