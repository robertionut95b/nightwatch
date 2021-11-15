import { GraphQLResolveInfo } from "graphql";
import { UpdateSeasonArgs } from "./args/UpdateSeasonArgs";
import { Season } from "../../../models/Season";
export declare class UpdateSeasonResolver {
    updateSeason(ctx: any, info: GraphQLResolveInfo, args: UpdateSeasonArgs): Promise<Season | null>;
}
