import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { SeasonRelationFilter } from "../inputs/SeasonRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class EpisodeWhereInput {
    AND?: EpisodeWhereInput[] | undefined;
    OR?: EpisodeWhereInput[] | undefined;
    NOT?: EpisodeWhereInput[] | undefined;
    id?: IntFilter | undefined;
    title?: StringFilter | undefined;
    runtime?: IntFilter | undefined;
    plot?: StringFilter | undefined;
    poster?: StringFilter | undefined;
    imdbRating?: FloatFilter | undefined;
    season?: SeasonRelationFilter | undefined;
    seasonId?: IntFilter | undefined;
}
