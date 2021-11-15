import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { MovieListRelationFilter } from "../inputs/MovieListRelationFilter";
import { SerieRelationFilter } from "../inputs/SerieRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ActorWhereInput {
    AND?: ActorWhereInput[] | undefined;
    OR?: ActorWhereInput[] | undefined;
    NOT?: ActorWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    movies?: MovieListRelationFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    series?: SerieRelationFilter | undefined;
    seriesId?: IntNullableFilter | undefined;
}
