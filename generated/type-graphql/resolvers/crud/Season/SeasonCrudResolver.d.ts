import { GraphQLResolveInfo } from "graphql";
import { AggregateSeasonArgs } from "./args/AggregateSeasonArgs";
import { CreateManySeasonArgs } from "./args/CreateManySeasonArgs";
import { CreateSeasonArgs } from "./args/CreateSeasonArgs";
import { DeleteManySeasonArgs } from "./args/DeleteManySeasonArgs";
import { DeleteSeasonArgs } from "./args/DeleteSeasonArgs";
import { FindFirstSeasonArgs } from "./args/FindFirstSeasonArgs";
import { FindManySeasonArgs } from "./args/FindManySeasonArgs";
import { FindUniqueSeasonArgs } from "./args/FindUniqueSeasonArgs";
import { GroupBySeasonArgs } from "./args/GroupBySeasonArgs";
import { UpdateManySeasonArgs } from "./args/UpdateManySeasonArgs";
import { UpdateSeasonArgs } from "./args/UpdateSeasonArgs";
import { UpsertSeasonArgs } from "./args/UpsertSeasonArgs";
import { Season } from "../../../models/Season";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateSeason } from "../../outputs/AggregateSeason";
import { SeasonGroupBy } from "../../outputs/SeasonGroupBy";
export declare class SeasonCrudResolver {
    season(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSeasonArgs): Promise<Season | null>;
    findFirstSeason(ctx: any, info: GraphQLResolveInfo, args: FindFirstSeasonArgs): Promise<Season | null>;
    seasons(ctx: any, info: GraphQLResolveInfo, args: FindManySeasonArgs): Promise<Season[]>;
    createSeason(ctx: any, info: GraphQLResolveInfo, args: CreateSeasonArgs): Promise<Season>;
    createManySeason(ctx: any, info: GraphQLResolveInfo, args: CreateManySeasonArgs): Promise<AffectedRowsOutput>;
    deleteSeason(ctx: any, info: GraphQLResolveInfo, args: DeleteSeasonArgs): Promise<Season | null>;
    updateSeason(ctx: any, info: GraphQLResolveInfo, args: UpdateSeasonArgs): Promise<Season | null>;
    deleteManySeason(ctx: any, info: GraphQLResolveInfo, args: DeleteManySeasonArgs): Promise<AffectedRowsOutput>;
    updateManySeason(ctx: any, info: GraphQLResolveInfo, args: UpdateManySeasonArgs): Promise<AffectedRowsOutput>;
    upsertSeason(ctx: any, info: GraphQLResolveInfo, args: UpsertSeasonArgs): Promise<Season>;
    aggregateSeason(ctx: any, info: GraphQLResolveInfo, args: AggregateSeasonArgs): Promise<AggregateSeason>;
    groupBySeason(ctx: any, info: GraphQLResolveInfo, args: GroupBySeasonArgs): Promise<SeasonGroupBy[]>;
}
