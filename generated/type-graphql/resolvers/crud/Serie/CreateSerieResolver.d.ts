import { GraphQLResolveInfo } from "graphql";
import { CreateSerieArgs } from "./args/CreateSerieArgs";
import { Serie } from "../../../models/Serie";
export declare class CreateSerieResolver {
    createSerie(ctx: any, info: GraphQLResolveInfo, args: CreateSerieArgs): Promise<Serie>;
}
