import { GraphQLResolveInfo } from "graphql";
import { DeleteDirectorArgs } from "./args/DeleteDirectorArgs";
import { Director } from "../../../models/Director";
export declare class DeleteDirectorResolver {
    deleteDirector(ctx: any, info: GraphQLResolveInfo, args: DeleteDirectorArgs): Promise<Director | null>;
}
