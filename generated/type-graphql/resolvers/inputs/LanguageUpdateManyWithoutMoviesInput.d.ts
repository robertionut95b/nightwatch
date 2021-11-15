import { LanguageCreateOrConnectWithoutMoviesInput } from "../inputs/LanguageCreateOrConnectWithoutMoviesInput";
import { LanguageCreateWithoutMoviesInput } from "../inputs/LanguageCreateWithoutMoviesInput";
import { LanguageScalarWhereInput } from "../inputs/LanguageScalarWhereInput";
import { LanguageUpdateManyWithWhereWithoutMoviesInput } from "../inputs/LanguageUpdateManyWithWhereWithoutMoviesInput";
import { LanguageUpdateWithWhereUniqueWithoutMoviesInput } from "../inputs/LanguageUpdateWithWhereUniqueWithoutMoviesInput";
import { LanguageUpsertWithWhereUniqueWithoutMoviesInput } from "../inputs/LanguageUpsertWithWhereUniqueWithoutMoviesInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";
export declare class LanguageUpdateManyWithoutMoviesInput {
    create?: LanguageCreateWithoutMoviesInput[] | undefined;
    connectOrCreate?: LanguageCreateOrConnectWithoutMoviesInput[] | undefined;
    upsert?: LanguageUpsertWithWhereUniqueWithoutMoviesInput[] | undefined;
    connect?: LanguageWhereUniqueInput[] | undefined;
    set?: LanguageWhereUniqueInput[] | undefined;
    disconnect?: LanguageWhereUniqueInput[] | undefined;
    delete?: LanguageWhereUniqueInput[] | undefined;
    update?: LanguageUpdateWithWhereUniqueWithoutMoviesInput[] | undefined;
    updateMany?: LanguageUpdateManyWithWhereWithoutMoviesInput[] | undefined;
    deleteMany?: LanguageScalarWhereInput[] | undefined;
}
