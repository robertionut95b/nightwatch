import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class DirectorScalarWhereInput {
    AND?: DirectorScalarWhereInput[] | undefined;
    OR?: DirectorScalarWhereInput[] | undefined;
    NOT?: DirectorScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    seriesId?: IntNullableFilter | undefined;
}
