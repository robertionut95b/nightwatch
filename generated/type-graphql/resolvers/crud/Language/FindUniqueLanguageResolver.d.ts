import { GraphQLResolveInfo } from "graphql";
import { FindUniqueLanguageArgs } from "./args/FindUniqueLanguageArgs";
import { Language } from "../../../models/Language";
export declare class FindUniqueLanguageResolver {
    language(ctx: any, info: GraphQLResolveInfo, args: FindUniqueLanguageArgs): Promise<Language | null>;
}
