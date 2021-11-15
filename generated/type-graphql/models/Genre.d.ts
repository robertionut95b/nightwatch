import { Movie } from "../models/Movie";
import { Serie } from "../models/Serie";
import { GenreCount } from "../resolvers/outputs/GenreCount";
export declare class Genre {
    id: number;
    name: string;
    movies?: Movie[];
    series?: Serie[];
    createdAt: Date;
    updatedAt: Date;
    _count?: GenreCount | null;
}
