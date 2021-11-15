import { GraphQLResolveInfo } from "graphql";
import { CreateManyLanguageArgs } from "./args/CreateManyLanguageArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyLanguageResolver {
    createManyLanguage(ctx: any, info: GraphQLResolveInfo, args: CreateManyLanguageArgs): Promise<AffectedRowsOutput>;
}
