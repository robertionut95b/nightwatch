import { GraphQLResolveInfo } from "graphql";
import { UpsertSerieArgs } from "./args/UpsertSerieArgs";
import { Serie } from "../../../models/Serie";
export declare class UpsertSerieResolver {
    upsertSerie(ctx: any, info: GraphQLResolveInfo, args: UpsertSerieArgs): Promise<Serie>;
}
