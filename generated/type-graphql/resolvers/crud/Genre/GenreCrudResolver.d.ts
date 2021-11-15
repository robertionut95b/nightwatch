import { GraphQLResolveInfo } from "graphql";
import { AggregateGenreArgs } from "./args/AggregateGenreArgs";
import { CreateGenreArgs } from "./args/CreateGenreArgs";
import { CreateManyGenreArgs } from "./args/CreateManyGenreArgs";
import { DeleteGenreArgs } from "./args/DeleteGenreArgs";
import { DeleteManyGenreArgs } from "./args/DeleteManyGenreArgs";
import { FindFirstGenreArgs } from "./args/FindFirstGenreArgs";
import { FindManyGenreArgs } from "./args/FindManyGenreArgs";
import { FindUniqueGenreArgs } from "./args/FindUniqueGenreArgs";
import { GroupByGenreArgs } from "./args/GroupByGenreArgs";
import { UpdateGenreArgs } from "./args/UpdateGenreArgs";
import { UpdateManyGenreArgs } from "./args/UpdateManyGenreArgs";
import { UpsertGenreArgs } from "./args/UpsertGenreArgs";
import { Genre } from "../../../models/Genre";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateGenre } from "../../outputs/AggregateGenre";
import { GenreGroupBy } from "../../outputs/GenreGroupBy";
export declare class GenreCrudResolver {
    genre(ctx: any, info: GraphQLResolveInfo, args: FindUniqueGenreArgs): Promise<Genre | null>;
    findFirstGenre(ctx: any, info: GraphQLResolveInfo, args: FindFirstGenreArgs): Promise<Genre | null>;
    genres(ctx: any, info: GraphQLResolveInfo, args: FindManyGenreArgs): Promise<Genre[]>;
    createGenre(ctx: any, info: GraphQLResolveInfo, args: CreateGenreArgs): Promise<Genre>;
    createManyGenre(ctx: any, info: GraphQLResolveInfo, args: CreateManyGenreArgs): Promise<AffectedRowsOutput>;
    deleteGenre(ctx: any, info: GraphQLResolveInfo, args: DeleteGenreArgs): Promise<Genre | null>;
    updateGenre(ctx: any, info: GraphQLResolveInfo, args: UpdateGenreArgs): Promise<Genre | null>;
    deleteManyGenre(ctx: any, info: GraphQLResolveInfo, args: DeleteManyGenreArgs): Promise<AffectedRowsOutput>;
    updateManyGenre(ctx: any, info: GraphQLResolveInfo, args: UpdateManyGenreArgs): Promise<AffectedRowsOutput>;
    upsertGenre(ctx: any, info: GraphQLResolveInfo, args: UpsertGenreArgs): Promise<Genre>;
    aggregateGenre(ctx: any, info: GraphQLResolveInfo, args: AggregateGenreArgs): Promise<AggregateGenre>;
    groupByGenre(ctx: any, info: GraphQLResolveInfo, args: GroupByGenreArgs): Promise<GenreGroupBy[]>;
}
