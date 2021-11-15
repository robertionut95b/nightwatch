import { GraphQLResolveInfo } from "graphql";
import { DeleteLanguageArgs } from "./args/DeleteLanguageArgs";
import { Language } from "../../../models/Language";
export declare class DeleteLanguageResolver {
    deleteLanguage(ctx: any, info: GraphQLResolveInfo, args: DeleteLanguageArgs): Promise<Language | null>;
}
