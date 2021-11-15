import { GraphQLResolveInfo } from "graphql";
import { UpsertLanguageArgs } from "./args/UpsertLanguageArgs";
import { Language } from "../../../models/Language";
export declare class UpsertLanguageResolver {
    upsertLanguage(ctx: any, info: GraphQLResolveInfo, args: UpsertLanguageArgs): Promise<Language>;
}
