import { Movie } from "../models/Movie";
import { Serie } from "../models/Serie";
import { DirectorCount } from "../resolvers/outputs/DirectorCount";
export declare class Director {
    id: number;
    name: string;
    movies?: Movie[];
    createdAt: Date;
    updatedAt: Date;
    series?: Serie | null;
    seriesId?: number | null;
    _count?: DirectorCount | null;
}
