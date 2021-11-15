import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class DirectorScalarWhereWithAggregatesInput {
    AND?: DirectorScalarWhereWithAggregatesInput[] | undefined;
    OR?: DirectorScalarWhereWithAggregatesInput[] | undefined;
    NOT?: DirectorScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    seriesId?: IntNullableWithAggregatesFilter | undefined;
}
