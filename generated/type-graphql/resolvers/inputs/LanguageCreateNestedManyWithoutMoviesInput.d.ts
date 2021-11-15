import { LanguageCreateOrConnectWithoutMoviesInput } from "../inputs/LanguageCreateOrConnectWithoutMoviesInput";
import { LanguageCreateWithoutMoviesInput } from "../inputs/LanguageCreateWithoutMoviesInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";
export declare class LanguageCreateNestedManyWithoutMoviesInput {
    create?: LanguageCreateWithoutMoviesInput[] | undefined;
    connectOrCreate?: LanguageCreateOrConnectWithoutMoviesInput[] | undefined;
    connect?: LanguageWhereUniqueInput[] | undefined;
}
