import { GenreCreateInput } from "../../../inputs/GenreCreateInput";
import { GenreUpdateInput } from "../../../inputs/GenreUpdateInput";
import { GenreWhereUniqueInput } from "../../../inputs/GenreWhereUniqueInput";
export declare class UpsertGenreArgs {
    where: GenreWhereUniqueInput;
    create: GenreCreateInput;
    update: GenreUpdateInput;
}
