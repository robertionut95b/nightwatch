import { ActorListRelationFilter } from "../inputs/ActorListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DirectorListRelationFilter } from "../inputs/DirectorListRelationFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { GenreListRelationFilter } from "../inputs/GenreListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { LanguageListRelationFilter } from "../inputs/LanguageListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class MovieWhereInput {
    AND?: MovieWhereInput[] | undefined;
    OR?: MovieWhereInput[] | undefined;
    NOT?: MovieWhereInput[] | undefined;
    id?: IntFilter | undefined;
    title?: StringFilter | undefined;
    year?: IntFilter | undefined;
    rating?: StringFilter | undefined;
    release?: DateTimeFilter | undefined;
    runtime?: IntFilter | undefined;
    genres?: GenreListRelationFilter | undefined;
    directors?: DirectorListRelationFilter | undefined;
    actors?: ActorListRelationFilter | undefined;
    plot?: StringFilter | undefined;
    languages?: LanguageListRelationFilter | undefined;
    poster?: StringFilter | undefined;
    imdbRating?: FloatFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
