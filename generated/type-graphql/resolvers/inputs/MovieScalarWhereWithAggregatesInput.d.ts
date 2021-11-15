import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class MovieScalarWhereWithAggregatesInput {
    AND?: MovieScalarWhereWithAggregatesInput[] | undefined;
    OR?: MovieScalarWhereWithAggregatesInput[] | undefined;
    NOT?: MovieScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    year?: IntWithAggregatesFilter | undefined;
    rating?: StringWithAggregatesFilter | undefined;
    release?: DateTimeWithAggregatesFilter | undefined;
    runtime?: IntWithAggregatesFilter | undefined;
    plot?: StringWithAggregatesFilter | undefined;
    poster?: StringWithAggregatesFilter | undefined;
    imdbRating?: FloatWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
