import { GraphQLResolveInfo } from "graphql";
import { GroupByActorArgs } from "./args/GroupByActorArgs";
import { ActorGroupBy } from "../../outputs/ActorGroupBy";
export declare class GroupByActorResolver {
    groupByActor(ctx: any, info: GraphQLResolveInfo, args: GroupByActorArgs): Promise<ActorGroupBy[]>;
}
