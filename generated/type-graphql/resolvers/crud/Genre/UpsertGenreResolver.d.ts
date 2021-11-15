import { GraphQLResolveInfo } from "graphql";
import { UpsertGenreArgs } from "./args/UpsertGenreArgs";
import { Genre } from "../../../models/Genre";
export declare class UpsertGenreResolver {
    upsertGenre(ctx: any, info: GraphQLResolveInfo, args: UpsertGenreArgs): Promise<Genre>;
}
