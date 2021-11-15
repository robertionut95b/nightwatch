import { GraphQLResolveInfo } from "graphql";
import { FindUniqueDirectorArgs } from "./args/FindUniqueDirectorArgs";
import { Director } from "../../../models/Director";
export declare class FindUniqueDirectorResolver {
    director(ctx: any, info: GraphQLResolveInfo, args: FindUniqueDirectorArgs): Promise<Director | null>;
}
