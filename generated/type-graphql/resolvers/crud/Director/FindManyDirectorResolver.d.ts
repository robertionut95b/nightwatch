import { GraphQLResolveInfo } from "graphql";
import { FindManyDirectorArgs } from "./args/FindManyDirectorArgs";
import { Director } from "../../../models/Director";
export declare class FindManyDirectorResolver {
    directors(ctx: any, info: GraphQLResolveInfo, args: FindManyDirectorArgs): Promise<Director[]>;
}
