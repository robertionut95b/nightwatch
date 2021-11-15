import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSeasonArgs } from "./args/FindUniqueSeasonArgs";
import { Season } from "../../../models/Season";
export declare class FindUniqueSeasonResolver {
    season(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSeasonArgs): Promise<Season | null>;
}
