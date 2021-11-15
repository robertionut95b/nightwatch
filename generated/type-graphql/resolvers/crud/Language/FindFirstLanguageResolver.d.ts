import { GraphQLResolveInfo } from "graphql";
import { FindFirstLanguageArgs } from "./args/FindFirstLanguageArgs";
import { Language } from "../../../models/Language";
export declare class FindFirstLanguageResolver {
    findFirstLanguage(ctx: any, info: GraphQLResolveInfo, args: FindFirstLanguageArgs): Promise<Language | null>;
}
