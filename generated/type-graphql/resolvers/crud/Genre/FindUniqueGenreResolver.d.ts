import { GraphQLResolveInfo } from "graphql";
import { FindUniqueGenreArgs } from "./args/FindUniqueGenreArgs";
import { Genre } from "../../../models/Genre";
export declare class FindUniqueGenreResolver {
    genre(ctx: any, info: GraphQLResolveInfo, args: FindUniqueGenreArgs): Promise<Genre | null>;
}
