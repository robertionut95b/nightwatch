import { GraphQLResolveInfo } from "graphql";
import { FindFirstActorArgs } from "./args/FindFirstActorArgs";
import { Actor } from "../../../models/Actor";
export declare class FindFirstActorResolver {
    findFirstActor(ctx: any, info: GraphQLResolveInfo, args: FindFirstActorArgs): Promise<Actor | null>;
}
