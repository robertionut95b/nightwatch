import { Movie } from "../models/Movie";
import { Serie } from "../models/Serie";
import { LanguageCount } from "../resolvers/outputs/LanguageCount";
export declare class Language {
    id: number;
    name: string;
    movies?: Movie[];
    createdAt: Date;
    updatedAt: Date;
    series?: Serie | null;
    seriesId?: number | null;
    _count?: LanguageCount | null;
}
