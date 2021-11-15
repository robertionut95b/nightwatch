import { GraphQLResolveInfo } from "graphql";
import { AggregateActorArgs } from "./args/AggregateActorArgs";
import { AggregateActor } from "../../outputs/AggregateActor";
export declare class AggregateActorResolver {
    aggregateActor(ctx: any, info: GraphQLResolveInfo, args: AggregateActorArgs): Promise<AggregateActor>;
}
