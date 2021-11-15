import { GraphQLResolveInfo } from "graphql";
import { AggregateGenreArgs } from "./args/AggregateGenreArgs";
import { AggregateGenre } from "../../outputs/AggregateGenre";
export declare class AggregateGenreResolver {
    aggregateGenre(ctx: any, info: GraphQLResolveInfo, args: AggregateGenreArgs): Promise<AggregateGenre>;
}
