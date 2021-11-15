import { GraphQLResolveInfo } from "graphql";
import { FindManyGenreArgs } from "./args/FindManyGenreArgs";
import { Genre } from "../../../models/Genre";
export declare class FindManyGenreResolver {
    genres(ctx: any, info: GraphQLResolveInfo, args: FindManyGenreArgs): Promise<Genre[]>;
}
