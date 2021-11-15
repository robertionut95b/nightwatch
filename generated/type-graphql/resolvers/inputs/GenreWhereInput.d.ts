import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MovieListRelationFilter } from "../inputs/MovieListRelationFilter";
import { SerieListRelationFilter } from "../inputs/SerieListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class GenreWhereInput {
    AND?: GenreWhereInput[] | undefined;
    OR?: GenreWhereInput[] | undefined;
    NOT?: GenreWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    movies?: MovieListRelationFilter | undefined;
    series?: SerieListRelationFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
