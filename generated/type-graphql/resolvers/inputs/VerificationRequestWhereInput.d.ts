import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class VerificationRequestWhereInput {
    AND?: VerificationRequestWhereInput[] | undefined;
    OR?: VerificationRequestWhereInput[] | undefined;
    NOT?: VerificationRequestWhereInput[] | undefined;
    identifier?: StringFilter | undefined;
    token?: StringFilter | undefined;
    expires?: DateTimeFilter | undefined;
}
