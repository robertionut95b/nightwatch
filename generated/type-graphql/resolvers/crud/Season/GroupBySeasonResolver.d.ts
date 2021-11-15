import { GraphQLResolveInfo } from "graphql";
import { GroupBySeasonArgs } from "./args/GroupBySeasonArgs";
import { SeasonGroupBy } from "../../outputs/SeasonGroupBy";
export declare class GroupBySeasonResolver {
    groupBySeason(ctx: any, info: GraphQLResolveInfo, args: GroupBySeasonArgs): Promise<SeasonGroupBy[]>;
}
