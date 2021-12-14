import { MovieOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/MovieOrderByWithRelationAndSearchRelevanceInput";
import { MovieWhereInput } from "../../../inputs/MovieWhereInput";
import { MovieWhereUniqueInput } from "../../../inputs/MovieWhereUniqueInput";
export declare class FindFirstMovieArgs {
    where?: MovieWhereInput | undefined;
    orderBy?: MovieOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: MovieWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "title" | "year" | "rating" | "release" | "runtime" | "plot" | "poster" | "imdbRating" | "imdbID" | "createdAt" | "updatedAt"> | undefined;
}
