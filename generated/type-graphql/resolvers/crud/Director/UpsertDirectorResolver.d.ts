import { GraphQLResolveInfo } from "graphql";
import { UpsertDirectorArgs } from "./args/UpsertDirectorArgs";
import { Director } from "../../../models/Director";
export declare class UpsertDirectorResolver {
    upsertDirector(ctx: any, info: GraphQLResolveInfo, args: UpsertDirectorArgs): Promise<Director>;
}
