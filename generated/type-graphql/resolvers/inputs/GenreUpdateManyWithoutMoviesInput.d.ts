import { GenreCreateOrConnectWithoutMoviesInput } from "../inputs/GenreCreateOrConnectWithoutMoviesInput";
import { GenreCreateWithoutMoviesInput } from "../inputs/GenreCreateWithoutMoviesInput";
import { GenreScalarWhereInput } from "../inputs/GenreScalarWhereInput";
import { GenreUpdateManyWithWhereWithoutMoviesInput } from "../inputs/GenreUpdateManyWithWhereWithoutMoviesInput";
import { GenreUpdateWithWhereUniqueWithoutMoviesInput } from "../inputs/GenreUpdateWithWhereUniqueWithoutMoviesInput";
import { GenreUpsertWithWhereUniqueWithoutMoviesInput } from "../inputs/GenreUpsertWithWhereUniqueWithoutMoviesInput";
import { GenreWhereUniqueInput } from "../inputs/GenreWhereUniqueInput";
export declare class GenreUpdateManyWithoutMoviesInput {
    create?: GenreCreateWithoutMoviesInput[] | undefined;
    connectOrCreate?: GenreCreateOrConnectWithoutMoviesInput[] | undefined;
    upsert?: GenreUpsertWithWhereUniqueWithoutMoviesInput[] | undefined;
    connect?: GenreWhereUniqueInput[] | undefined;
    set?: GenreWhereUniqueInput[] | undefined;
    disconnect?: GenreWhereUniqueInput[] | undefined;
    delete?: GenreWhereUniqueInput[] | undefined;
    update?: GenreUpdateWithWhereUniqueWithoutMoviesInput[] | undefined;
    updateMany?: GenreUpdateManyWithWhereWithoutMoviesInput[] | undefined;
    deleteMany?: GenreScalarWhereInput[] | undefined;
}
