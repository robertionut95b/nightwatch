import { GraphQLResolveInfo } from "graphql";
import { DeleteActorArgs } from "./args/DeleteActorArgs";
import { Actor } from "../../../models/Actor";
export declare class DeleteActorResolver {
    deleteActor(ctx: any, info: GraphQLResolveInfo, args: DeleteActorArgs): Promise<Actor | null>;
}
