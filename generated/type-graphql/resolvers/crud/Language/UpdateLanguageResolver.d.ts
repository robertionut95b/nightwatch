import { GraphQLResolveInfo } from "graphql";
import { UpdateLanguageArgs } from "./args/UpdateLanguageArgs";
import { Language } from "../../../models/Language";
export declare class UpdateLanguageResolver {
    updateLanguage(ctx: any, info: GraphQLResolveInfo, args: UpdateLanguageArgs): Promise<Language | null>;
}
