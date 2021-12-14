import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class EpisodeScalarWhereWithAggregatesInput {
    AND?: EpisodeScalarWhereWithAggregatesInput[] | undefined;
    OR?: EpisodeScalarWhereWithAggregatesInput[] | undefined;
    NOT?: EpisodeScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    runtime?: IntWithAggregatesFilter | undefined;
    plot?: StringWithAggregatesFilter | undefined;
    poster?: StringWithAggregatesFilter | undefined;
    imdbRating?: FloatWithAggregatesFilter | undefined;
    imdbID?: StringWithAggregatesFilter | undefined;
    seasonId?: IntWithAggregatesFilter | undefined;
}
