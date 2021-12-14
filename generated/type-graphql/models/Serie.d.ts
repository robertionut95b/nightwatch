import { Actor } from "../models/Actor";
import { Director } from "../models/Director";
import { Genre } from "../models/Genre";
import { Language } from "../models/Language";
import { Season } from "../models/Season";
import { SerieCount } from "../resolvers/outputs/SerieCount";
export declare class Serie {
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
    totalSeasons: number;
    seasons?: Season[];
    createdAt: Date;
    updatedAt: Date;
    _count?: SerieCount | null;
}
