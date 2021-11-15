import { GraphQLResolveInfo } from "graphql";
import { DeleteManyLanguageArgs } from "./args/DeleteManyLanguageArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyLanguageResolver {
    deleteManyLanguage(ctx: any, info: GraphQLResolveInfo, args: DeleteManyLanguageArgs): Promise<AffectedRowsOutput>;
}
