import { Episode } from "../models/Episode";
import { Serie } from "../models/Serie";
import { SeasonCount } from "../resolvers/outputs/SeasonCount";
export declare class Season {
    id: number;
    title: string;
    index: number;
    episodes: number;
    episodeIds?: Episode[];
    series?: Serie;
    seriesId: number;
    launchDate: Date;
    createdAt: Date;
    updatedAt: Date;
    _count?: SeasonCount | null;
}
