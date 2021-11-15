import { GraphQLResolveInfo } from "graphql";
import { CreateSeasonArgs } from "./args/CreateSeasonArgs";
import { Season } from "../../../models/Season";
export declare class CreateSeasonResolver {
    createSeason(ctx: any, info: GraphQLResolveInfo, args: CreateSeasonArgs): Promise<Season>;
}
