import { GraphQLResolveInfo } from "graphql";
import { AggregateDirectorArgs } from "./args/AggregateDirectorArgs";
import { AggregateDirector } from "../../outputs/AggregateDirector";
export declare class AggregateDirectorResolver {
    aggregateDirector(ctx: any, info: GraphQLResolveInfo, args: AggregateDirectorArgs): Promise<AggregateDirector>;
}
