import { GraphQLResolveInfo } from "graphql";
import { DeleteManyActorArgs } from "./args/DeleteManyActorArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyActorResolver {
    deleteManyActor(ctx: any, info: GraphQLResolveInfo, args: DeleteManyActorArgs): Promise<AffectedRowsOutput>;
}
