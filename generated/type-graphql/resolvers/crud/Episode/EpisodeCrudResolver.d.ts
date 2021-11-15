import { GraphQLResolveInfo } from "graphql";
import { AggregateEpisodeArgs } from "./args/AggregateEpisodeArgs";
import { CreateEpisodeArgs } from "./args/CreateEpisodeArgs";
import { CreateManyEpisodeArgs } from "./args/CreateManyEpisodeArgs";
import { DeleteEpisodeArgs } from "./args/DeleteEpisodeArgs";
import { DeleteManyEpisodeArgs } from "./args/DeleteManyEpisodeArgs";
import { FindFirstEpisodeArgs } from "./args/FindFirstEpisodeArgs";
import { FindManyEpisodeArgs } from "./args/FindManyEpisodeArgs";
import { FindUniqueEpisodeArgs } from "./args/FindUniqueEpisodeArgs";
import { GroupByEpisodeArgs } from "./args/GroupByEpisodeArgs";
import { UpdateEpisodeArgs } from "./args/UpdateEpisodeArgs";
import { UpdateManyEpisodeArgs } from "./args/UpdateManyEpisodeArgs";
import { UpsertEpisodeArgs } from "./args/UpsertEpisodeArgs";
import { Episode } from "../../../models/Episode";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateEpisode } from "../../outputs/AggregateEpisode";
import { EpisodeGroupBy } from "../../outputs/EpisodeGroupBy";
export declare class EpisodeCrudResolver {
    episode(ctx: any, info: GraphQLResolveInfo, args: FindUniqueEpisodeArgs): Promise<Episode | null>;
    findFirstEpisode(ctx: any, info: GraphQLResolveInfo, args: FindFirstEpisodeArgs): Promise<Episode | null>;
    episodes(ctx: any, info: GraphQLResolveInfo, args: FindManyEpisodeArgs): Promise<Episode[]>;
    createEpisode(ctx: any, info: GraphQLResolveInfo, args: CreateEpisodeArgs): Promise<Episode>;
    createManyEpisode(ctx: any, info: GraphQLResolveInfo, args: CreateManyEpisodeArgs): Promise<AffectedRowsOutput>;
    deleteEpisode(ctx: any, info: GraphQLResolveInfo, args: DeleteEpisodeArgs): Promise<Episode | null>;
    updateEpisode(ctx: any, info: GraphQLResolveInfo, args: UpdateEpisodeArgs): Promise<Episode | null>;
    deleteManyEpisode(ctx: any, info: GraphQLResolveInfo, args: DeleteManyEpisodeArgs): Promise<AffectedRowsOutput>;
    updateManyEpisode(ctx: any, info: GraphQLResolveInfo, args: UpdateManyEpisodeArgs): Promise<AffectedRowsOutput>;
    upsertEpisode(ctx: any, info: GraphQLResolveInfo, args: UpsertEpisodeArgs): Promise<Episode>;
    aggregateEpisode(ctx: any, info: GraphQLResolveInfo, args: AggregateEpisodeArgs): Promise<AggregateEpisode>;
    groupByEpisode(ctx: any, info: GraphQLResolveInfo, args: GroupByEpisodeArgs): Promise<EpisodeGroupBy[]>;
}
