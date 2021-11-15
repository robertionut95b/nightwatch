import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EpisodeListRelationFilter } from "../inputs/EpisodeListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { SerieRelationFilter } from "../inputs/SerieRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class SeasonWhereInput {
    AND?: SeasonWhereInput[] | undefined;
    OR?: SeasonWhereInput[] | undefined;
    NOT?: SeasonWhereInput[] | undefined;
    id?: IntFilter | undefined;
    title?: StringFilter | undefined;
    index?: IntFilter | undefined;
    episodes?: IntFilter | undefined;
    episodeIds?: EpisodeListRelationFilter | undefined;
    series?: SerieRelationFilter | undefined;
    seriesId?: IntFilter | undefined;
    launchDate?: DateTimeFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
