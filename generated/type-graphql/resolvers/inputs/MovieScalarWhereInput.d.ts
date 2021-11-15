import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class MovieScalarWhereInput {
    AND?: MovieScalarWhereInput[] | undefined;
    OR?: MovieScalarWhereInput[] | undefined;
    NOT?: MovieScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    title?: StringFilter | undefined;
    year?: IntFilter | undefined;
    rating?: StringFilter | undefined;
    release?: DateTimeFilter | undefined;
    runtime?: IntFilter | undefined;
    plot?: StringFilter | undefined;
    poster?: StringFilter | undefined;
    imdbRating?: FloatFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
