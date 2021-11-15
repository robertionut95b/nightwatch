import { GraphQLResolveInfo } from "graphql";
import { UpdateManyActorArgs } from "./args/UpdateManyActorArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyActorResolver {
    updateManyActor(ctx: any, info: GraphQLResolveInfo, args: UpdateManyActorArgs): Promise<AffectedRowsOutput>;
}
