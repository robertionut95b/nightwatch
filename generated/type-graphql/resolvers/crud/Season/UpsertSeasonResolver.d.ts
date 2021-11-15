import { GraphQLResolveInfo } from "graphql";
import { UpsertSeasonArgs } from "./args/UpsertSeasonArgs";
import { Season } from "../../../models/Season";
export declare class UpsertSeasonResolver {
    upsertSeason(ctx: any, info: GraphQLResolveInfo, args: UpsertSeasonArgs): Promise<Season>;
}
