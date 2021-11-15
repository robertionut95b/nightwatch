import { GraphQLResolveInfo } from "graphql";
import { FindFirstGenreArgs } from "./args/FindFirstGenreArgs";
import { Genre } from "../../../models/Genre";
export declare class FindFirstGenreResolver {
    findFirstGenre(ctx: any, info: GraphQLResolveInfo, args: FindFirstGenreArgs): Promise<Genre | null>;
}
