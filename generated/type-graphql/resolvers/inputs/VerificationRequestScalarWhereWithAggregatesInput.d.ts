import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class VerificationRequestScalarWhereWithAggregatesInput {
    AND?: VerificationRequestScalarWhereWithAggregatesInput[] | undefined;
    OR?: VerificationRequestScalarWhereWithAggregatesInput[] | undefined;
    NOT?: VerificationRequestScalarWhereWithAggregatesInput[] | undefined;
    identifier?: StringWithAggregatesFilter | undefined;
    token?: StringWithAggregatesFilter | undefined;
    expires?: DateTimeWithAggregatesFilter | undefined;
}
