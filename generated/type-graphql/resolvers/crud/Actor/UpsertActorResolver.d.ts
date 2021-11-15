import { GraphQLResolveInfo } from "graphql";
import { UpsertActorArgs } from "./args/UpsertActorArgs";
import { Actor } from "../../../models/Actor";
export declare class UpsertActorResolver {
    upsertActor(ctx: any, info: GraphQLResolveInfo, args: UpsertActorArgs): Promise<Actor>;
}
