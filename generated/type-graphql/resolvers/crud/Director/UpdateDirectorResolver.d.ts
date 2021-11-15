import { GraphQLResolveInfo } from "graphql";
import { UpdateDirectorArgs } from "./args/UpdateDirectorArgs";
import { Director } from "../../../models/Director";
export declare class UpdateDirectorResolver {
    updateDirector(ctx: any, info: GraphQLResolveInfo, args: UpdateDirectorArgs): Promise<Director | null>;
}
