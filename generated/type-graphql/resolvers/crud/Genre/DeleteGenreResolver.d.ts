import { GraphQLResolveInfo } from "graphql";
import { DeleteGenreArgs } from "./args/DeleteGenreArgs";
import { Genre } from "../../../models/Genre";
export declare class DeleteGenreResolver {
    deleteGenre(ctx: any, info: GraphQLResolveInfo, args: DeleteGenreArgs): Promise<Genre | null>;
}
