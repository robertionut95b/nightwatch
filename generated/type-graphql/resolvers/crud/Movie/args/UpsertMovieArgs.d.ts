import { MovieCreateInput } from "../../../inputs/MovieCreateInput";
import { MovieUpdateInput } from "../../../inputs/MovieUpdateInput";
import { MovieWhereUniqueInput } from "../../../inputs/MovieWhereUniqueInput";
export declare class UpsertMovieArgs {
    where: MovieWhereUniqueInput;
    create: MovieCreateInput;
    update: MovieUpdateInput;
}
