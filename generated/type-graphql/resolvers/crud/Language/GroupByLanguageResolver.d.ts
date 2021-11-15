import { GraphQLResolveInfo } from "graphql";
import { GroupByLanguageArgs } from "./args/GroupByLanguageArgs";
import { LanguageGroupBy } from "../../outputs/LanguageGroupBy";
export declare class GroupByLanguageResolver {
    groupByLanguage(ctx: any, info: GraphQLResolveInfo, args: GroupByLanguageArgs): Promise<LanguageGroupBy[]>;
}
