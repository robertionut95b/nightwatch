import { GraphQLResolveInfo } from "graphql";
import { FindFirstSerieArgs } from "./args/FindFirstSerieArgs";
import { Serie } from "../../../models/Serie";
export declare class FindFirstSerieResolver {
    findFirstSerie(ctx: any, info: GraphQLResolveInfo, args: FindFirstSerieArgs): Promise<Serie | null>;
}
