import { MovieCreateWithoutActorsInput } from "../inputs/MovieCreateWithoutActorsInput";
import { MovieUpdateWithoutActorsInput } from "../inputs/MovieUpdateWithoutActorsInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";
export declare class MovieUpsertWithWhereUniqueWithoutActorsInput {
    where: MovieWhereUniqueInput;
    update: MovieUpdateWithoutActorsInput;
    create: MovieCreateWithoutActorsInput;
}
