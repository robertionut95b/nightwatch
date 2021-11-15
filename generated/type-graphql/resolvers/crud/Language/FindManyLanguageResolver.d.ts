import { GraphQLResolveInfo } from "graphql";
import { FindManyLanguageArgs } from "./args/FindManyLanguageArgs";
import { Language } from "../../../models/Language";
export declare class FindManyLanguageResolver {
    languages(ctx: any, info: GraphQLResolveInfo, args: FindManyLanguageArgs): Promise<Language[]>;
}
