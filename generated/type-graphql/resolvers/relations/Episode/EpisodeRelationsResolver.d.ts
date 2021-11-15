import { Episode } from "../../../models/Episode";
import { Season } from "../../../models/Season";
export declare class EpisodeRelationsResolver {
    season(episode: Episode, ctx: any): Promise<Season>;
}
