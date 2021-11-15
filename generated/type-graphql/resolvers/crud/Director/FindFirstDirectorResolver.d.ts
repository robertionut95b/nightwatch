import { GraphQLResolveInfo } from "graphql";
import { FindFirstDirectorArgs } from "./args/FindFirstDirectorArgs";
import { Director } from "../../../models/Director";
export declare class FindFirstDirectorResolver {
    findFirstDirector(ctx: any, info: GraphQLResolveInfo, args: FindFirstDirectorArgs): Promise<Director | null>;
}
