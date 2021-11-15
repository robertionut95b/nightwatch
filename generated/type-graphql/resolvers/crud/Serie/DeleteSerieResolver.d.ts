import { GraphQLResolveInfo } from "graphql";
import { DeleteSerieArgs } from "./args/DeleteSerieArgs";
import { Serie } from "../../../models/Serie";
export declare class DeleteSerieResolver {
    deleteSerie(ctx: any, info: GraphQLResolveInfo, args: DeleteSerieArgs): Promise<Serie | null>;
}
