import { GraphQLResolveInfo } from "graphql";
import { FindFirstSeasonArgs } from "./args/FindFirstSeasonArgs";
import { Season } from "../../../models/Season";
export declare class FindFirstSeasonResolver {
    findFirstSeason(ctx: any, info: GraphQLResolveInfo, args: FindFirstSeasonArgs): Promise<Season | null>;
}
