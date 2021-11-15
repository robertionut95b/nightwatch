import { EpisodeCreateInput } from "../../../inputs/EpisodeCreateInput";
import { EpisodeUpdateInput } from "../../../inputs/EpisodeUpdateInput";
import { EpisodeWhereUniqueInput } from "../../../inputs/EpisodeWhereUniqueInput";
export declare class UpsertEpisodeArgs {
    where: EpisodeWhereUniqueInput;
    create: EpisodeCreateInput;
    update: EpisodeUpdateInput;
}
