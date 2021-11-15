import { GraphQLResolveInfo } from "graphql";
import { CreateDirectorArgs } from "./args/CreateDirectorArgs";
import { Director } from "../../../models/Director";
export declare class CreateDirectorResolver {
    createDirector(ctx: any, info: GraphQLResolveInfo, args: CreateDirectorArgs): Promise<Director>;
}
