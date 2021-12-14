import { SerieOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/SerieOrderByWithRelationAndSearchRelevanceInput";
import { SerieWhereInput } from "../../../inputs/SerieWhereInput";
import { SerieWhereUniqueInput } from "../../../inputs/SerieWhereUniqueInput";
export declare class FindManySerieArgs {
    where?: SerieWhereInput | undefined;
    orderBy?: SerieOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: SerieWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "title" | "year" | "rating" | "release" | "runtime" | "plot" | "poster" | "imdbRating" | "imdbID" | "totalSeasons" | "createdAt" | "updatedAt"> | undefined;
}
