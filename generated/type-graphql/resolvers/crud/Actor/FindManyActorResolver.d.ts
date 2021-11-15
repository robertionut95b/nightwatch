import { GraphQLResolveInfo } from "graphql";
import { FindManyActorArgs } from "./args/FindManyActorArgs";
import { Actor } from "../../../models/Actor";
export declare class FindManyActorResolver {
    actors(ctx: any, info: GraphQLResolveInfo, args: FindManyActorArgs): Promise<Actor[]>;
}
