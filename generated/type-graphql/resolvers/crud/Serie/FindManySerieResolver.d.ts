import { GraphQLResolveInfo } from "graphql";
import { FindManySerieArgs } from "./args/FindManySerieArgs";
import { Serie } from "../../../models/Serie";
export declare class FindManySerieResolver {
    series(ctx: any, info: GraphQLResolveInfo, args: FindManySerieArgs): Promise<Serie[]>;
}
