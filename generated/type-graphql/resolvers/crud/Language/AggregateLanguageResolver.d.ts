import { GraphQLResolveInfo } from "graphql";
import { AggregateLanguageArgs } from "./args/AggregateLanguageArgs";
import { AggregateLanguage } from "../../outputs/AggregateLanguage";
export declare class AggregateLanguageResolver {
    aggregateLanguage(ctx: any, info: GraphQLResolveInfo, args: AggregateLanguageArgs): Promise<AggregateLanguage>;
}
