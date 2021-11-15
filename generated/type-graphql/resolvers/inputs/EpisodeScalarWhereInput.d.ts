import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class EpisodeScalarWhereInput {
    AND?: EpisodeScalarWhereInput[] | undefined;
    OR?: EpisodeScalarWhereInput[] | undefined;
    NOT?: EpisodeScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    title?: StringFilter | undefined;
    runtime?: IntFilter | undefined;
    plot?: StringFilter | undefined;
    poster?: StringFilter | undefined;
    imdbRating?: FloatFilter | undefined;
    seasonId?: IntFilter | undefined;
}
