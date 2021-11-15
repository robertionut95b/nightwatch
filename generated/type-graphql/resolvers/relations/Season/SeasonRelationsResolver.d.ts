import { Episode } from "../../../models/Episode";
import { Season } from "../../../models/Season";
import { Serie } from "../../../models/Serie";
import { SeasonEpisodeIdsArgs } from "./args/SeasonEpisodeIdsArgs";
export declare class SeasonRelationsResolver {
    episodeIds(season: Season, ctx: any, args: SeasonEpisodeIdsArgs): Promise<Episode[]>;
    series(season: Season, ctx: any): Promise<Serie>;
}
