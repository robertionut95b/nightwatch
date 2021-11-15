import { DirectorCreateOrConnectWithoutMoviesInput } from "../inputs/DirectorCreateOrConnectWithoutMoviesInput";
import { DirectorCreateWithoutMoviesInput } from "../inputs/DirectorCreateWithoutMoviesInput";
import { DirectorWhereUniqueInput } from "../inputs/DirectorWhereUniqueInput";
export declare class DirectorCreateNestedManyWithoutMoviesInput {
    create?: DirectorCreateWithoutMoviesInput[] | undefined;
    connectOrCreate?: DirectorCreateOrConnectWithoutMoviesInput[] | undefined;
    connect?: DirectorWhereUniqueInput[] | undefined;
}
