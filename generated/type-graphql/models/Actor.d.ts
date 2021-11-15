import { Movie } from "../models/Movie";
import { Serie } from "../models/Serie";
import { ActorCount } from "../resolvers/outputs/ActorCount";
export declare class Actor {
    id: number;
    name: string;
    movies?: Movie[];
    createdAt: Date;
    updatedAt: Date;
    series?: Serie | null;
    seriesId?: number | null;
    _count?: ActorCount | null;
}
