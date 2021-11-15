import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { MovieListRelationFilter } from "../inputs/MovieListRelationFilter";
import { SerieRelationFilter } from "../inputs/SerieRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class LanguageWhereInput {
    AND?: LanguageWhereInput[] | undefined;
    OR?: LanguageWhereInput[] | undefined;
    NOT?: LanguageWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    movies?: MovieListRelationFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    series?: SerieRelationFilter | undefined;
    seriesId?: IntNullableFilter | undefined;
}
