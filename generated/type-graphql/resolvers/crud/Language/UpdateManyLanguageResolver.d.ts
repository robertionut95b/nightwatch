import { GraphQLResolveInfo } from "graphql";
import { UpdateManyLanguageArgs } from "./args/UpdateManyLanguageArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyLanguageResolver {
    updateManyLanguage(ctx: any, info: GraphQLResolveInfo, args: UpdateManyLanguageArgs): Promise<AffectedRowsOutput>;
}
