import { GraphQLResolveInfo } from "graphql";
import { CreateManySeasonArgs } from "./args/CreateManySeasonArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManySeasonResolver {
    createManySeason(ctx: any, info: GraphQLResolveInfo, args: CreateManySeasonArgs): Promise<AffectedRowsOutput>;
}
