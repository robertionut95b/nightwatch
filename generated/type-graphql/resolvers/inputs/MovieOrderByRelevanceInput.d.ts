export declare class MovieOrderByRelevanceInput {
    fields: Array<"title" | "rating" | "plot" | "poster" | "imdbID">;
    sort: "asc" | "desc";
    search: string;
}
