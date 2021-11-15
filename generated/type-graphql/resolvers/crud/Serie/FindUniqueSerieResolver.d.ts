import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSerieArgs } from "./args/FindUniqueSerieArgs";
import { Serie } from "../../../models/Serie";
export declare class FindUniqueSerieResolver {
    serie(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSerieArgs): Promise<Serie | null>;
}
