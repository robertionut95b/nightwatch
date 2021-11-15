import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class SeasonScalarWhereWithAggregatesInput {
    AND?: SeasonScalarWhereWithAggregatesInput[] | undefined;
    OR?: SeasonScalarWhereWithAggregatesInput[] | undefined;
    NOT?: SeasonScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    index?: IntWithAggregatesFilter | undefined;
    episodes?: IntWithAggregatesFilter | undefined;
    seriesId?: IntWithAggregatesFilter | undefined;
    launchDate?: DateTimeWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
