import { GraphQLResolveInfo } from "graphql";
import { CreateGenreArgs } from "./args/CreateGenreArgs";
import { Genre } from "../../../models/Genre";
export declare class CreateGenreResolver {
    createGenre(ctx: any, info: GraphQLResolveInfo, args: CreateGenreArgs): Promise<Genre>;
}
