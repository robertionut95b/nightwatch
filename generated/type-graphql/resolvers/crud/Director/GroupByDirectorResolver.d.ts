import { GraphQLResolveInfo } from "graphql";
import { GroupByDirectorArgs } from "./args/GroupByDirectorArgs";
import { DirectorGroupBy } from "../../outputs/DirectorGroupBy";
export declare class GroupByDirectorResolver {
    groupByDirector(ctx: any, info: GraphQLResolveInfo, args: GroupByDirectorArgs): Promise<DirectorGroupBy[]>;
}
