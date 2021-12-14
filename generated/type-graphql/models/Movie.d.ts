import { Actor } from "../models/Actor";
import { Director } from "../models/Director";
import { Genre } from "../models/Genre";
import { Language } from "../models/Language";
import { MovieCount } from "../resolvers/outputs/MovieCount";
export declare class Movie {
    id: number;
    title: string;
    year: number;
    rating: string;
    release: Date;
    runtime: number;
    genres?: Genre[];
    directors?: Director[];
    actors?: Actor[];
    plot: string;
    languages?: Language[];
    poster: string;
    imdbRating: number;
    imdbID: string;
    createdAt: Date;
    updatedAt: Date;
    _count?: MovieCount | null;
}
