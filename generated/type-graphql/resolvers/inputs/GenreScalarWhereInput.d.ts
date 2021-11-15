import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class GenreScalarWhereInput {
    AND?: GenreScalarWhereInput[] | undefined;
    OR?: GenreScalarWhereInput[] | undefined;
    NOT?: GenreScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
