import { GenreCreateOrConnectWithoutMoviesInput } from "../inputs/GenreCreateOrConnectWithoutMoviesInput";
import { GenreCreateWithoutMoviesInput } from "../inputs/GenreCreateWithoutMoviesInput";
import { GenreWhereUniqueInput } from "../inputs/GenreWhereUniqueInput";
export declare class GenreCreateNestedManyWithoutMoviesInput {
    create?: GenreCreateWithoutMoviesInput[] | undefined;
    connectOrCreate?: GenreCreateOrConnectWithoutMoviesInput[] | undefined;
    connect?: GenreWhereUniqueInput[] | undefined;
}
