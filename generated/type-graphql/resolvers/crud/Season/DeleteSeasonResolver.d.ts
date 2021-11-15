import { GraphQLResolveInfo } from "graphql";
import { DeleteSeasonArgs } from "./args/DeleteSeasonArgs";
import { Season } from "../../../models/Season";
export declare class DeleteSeasonResolver {
    deleteSeason(ctx: any, info: GraphQLResolveInfo, args: DeleteSeasonArgs): Promise<Season | null>;
}
