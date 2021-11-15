import { GraphQLResolveInfo } from "graphql";
import { GroupBySerieArgs } from "./args/GroupBySerieArgs";
import { SerieGroupBy } from "../../outputs/SerieGroupBy";
export declare class GroupBySerieResolver {
    groupBySerie(ctx: any, info: GraphQLResolveInfo, args: GroupBySerieArgs): Promise<SerieGroupBy[]>;
}
