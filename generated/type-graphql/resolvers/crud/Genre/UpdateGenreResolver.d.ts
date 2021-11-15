import { GraphQLResolveInfo } from "graphql";
import { UpdateGenreArgs } from "./args/UpdateGenreArgs";
import { Genre } from "../../../models/Genre";
export declare class UpdateGenreResolver {
    updateGenre(ctx: any, info: GraphQLResolveInfo, args: UpdateGenreArgs): Promise<Genre | null>;
}
