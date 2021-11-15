import { GraphQLResolveInfo } from "graphql";
import { FindManySeasonArgs } from "./args/FindManySeasonArgs";
import { Season } from "../../../models/Season";
export declare class FindManySeasonResolver {
    seasons(ctx: any, info: GraphQLResolveInfo, args: FindManySeasonArgs): Promise<Season[]>;
}
