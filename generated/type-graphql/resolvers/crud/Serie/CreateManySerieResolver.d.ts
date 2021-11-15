import { GraphQLResolveInfo } from "graphql";
import { CreateManySerieArgs } from "./args/CreateManySerieArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManySerieResolver {
    createManySerie(ctx: any, info: GraphQLResolveInfo, args: CreateManySerieArgs): Promise<AffectedRowsOutput>;
}
