import { GraphQLResolveInfo } from "graphql";
import { CreateManyActorArgs } from "./args/CreateManyActorArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyActorResolver {
    createManyActor(ctx: any, info: GraphQLResolveInfo, args: CreateManyActorArgs): Promise<AffectedRowsOutput>;
}
