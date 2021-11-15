import { MovieCreateWithoutGenresInput } from "../inputs/MovieCreateWithoutGenresInput";
import { MovieUpdateWithoutGenresInput } from "../inputs/MovieUpdateWithoutGenresInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";
export declare class MovieUpsertWithWhereUniqueWithoutGenresInput {
    where: MovieWhereUniqueInput;
    update: MovieUpdateWithoutGenresInput;
    create: MovieCreateWithoutGenresInput;
}
