import { EpisodeOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/EpisodeOrderByWithRelationAndSearchRelevanceInput";
import { EpisodeWhereInput } from "../../../inputs/EpisodeWhereInput";
import { EpisodeWhereUniqueInput } from "../../../inputs/EpisodeWhereUniqueInput";
export declare class AggregateEpisodeArgs {
    where?: EpisodeWhereInput | undefined;
    orderBy?: EpisodeOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: EpisodeWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
