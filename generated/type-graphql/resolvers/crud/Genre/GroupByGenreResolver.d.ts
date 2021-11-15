import { GraphQLResolveInfo } from "graphql";
import { GroupByGenreArgs } from "./args/GroupByGenreArgs";
import { GenreGroupBy } from "../../outputs/GenreGroupBy";
export declare class GroupByGenreResolver {
    groupByGenre(ctx: any, info: GraphQLResolveInfo, args: GroupByGenreArgs): Promise<GenreGroupBy[]>;
}
