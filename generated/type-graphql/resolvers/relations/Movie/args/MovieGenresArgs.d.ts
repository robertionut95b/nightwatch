import { GenreOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/GenreOrderByWithRelationAndSearchRelevanceInput";
import { GenreWhereInput } from "../../../inputs/GenreWhereInput";
import { GenreWhereUniqueInput } from "../../../inputs/GenreWhereUniqueInput";
export declare class MovieGenresArgs {
    where?: GenreWhereInput | undefined;
    orderBy?: GenreOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: GenreWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "createdAt" | "updatedAt"> | undefined;
}
