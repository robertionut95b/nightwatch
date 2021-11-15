import { GraphQLResolveInfo } from "graphql";
import { CreateLanguageArgs } from "./args/CreateLanguageArgs";
import { Language } from "../../../models/Language";
export declare class CreateLanguageResolver {
    createLanguage(ctx: any, info: GraphQLResolveInfo, args: CreateLanguageArgs): Promise<Language>;
}
