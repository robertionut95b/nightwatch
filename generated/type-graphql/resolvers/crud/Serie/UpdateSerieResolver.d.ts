import { GraphQLResolveInfo } from "graphql";
import { UpdateSerieArgs } from "./args/UpdateSerieArgs";
import { Serie } from "../../../models/Serie";
export declare class UpdateSerieResolver {
    updateSerie(ctx: any, info: GraphQLResolveInfo, args: UpdateSerieArgs): Promise<Serie | null>;
}
