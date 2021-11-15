import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class SeasonScalarWhereInput {
    AND?: SeasonScalarWhereInput[] | undefined;
    OR?: SeasonScalarWhereInput[] | undefined;
    NOT?: SeasonScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    title?: StringFilter | undefined;
    index?: IntFilter | undefined;
    episodes?: IntFilter | undefined;
    seriesId?: IntFilter | undefined;
    launchDate?: DateTimeFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
