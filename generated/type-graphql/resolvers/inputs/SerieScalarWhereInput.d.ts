import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class SerieScalarWhereInput {
    AND?: SerieScalarWhereInput[] | undefined;
    OR?: SerieScalarWhereInput[] | undefined;
    NOT?: SerieScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    title?: StringFilter | undefined;
    year?: IntFilter | undefined;
    rating?: StringFilter | undefined;
    release?: DateTimeFilter | undefined;
    runtime?: IntFilter | undefined;
    plot?: StringFilter | undefined;
    poster?: StringFilter | undefined;
    imdbRating?: FloatFilter | undefined;
    totalSeasons?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
