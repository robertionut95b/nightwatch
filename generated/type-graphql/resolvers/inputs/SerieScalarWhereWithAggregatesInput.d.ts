import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class SerieScalarWhereWithAggregatesInput {
    AND?: SerieScalarWhereWithAggregatesInput[] | undefined;
    OR?: SerieScalarWhereWithAggregatesInput[] | undefined;
    NOT?: SerieScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    year?: IntWithAggregatesFilter | undefined;
    rating?: StringWithAggregatesFilter | undefined;
    release?: DateTimeWithAggregatesFilter | undefined;
    runtime?: IntWithAggregatesFilter | undefined;
    plot?: StringWithAggregatesFilter | undefined;
    poster?: StringWithAggregatesFilter | undefined;
    imdbRating?: FloatWithAggregatesFilter | undefined;
    totalSeasons?: IntWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
