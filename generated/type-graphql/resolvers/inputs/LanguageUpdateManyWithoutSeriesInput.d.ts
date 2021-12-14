import { LanguageCreateOrConnectWithoutSeriesInput } from "../inputs/LanguageCreateOrConnectWithoutSeriesInput";
import { LanguageCreateWithoutSeriesInput } from "../inputs/LanguageCreateWithoutSeriesInput";
import { LanguageScalarWhereInput } from "../inputs/LanguageScalarWhereInput";
import { LanguageUpdateManyWithWhereWithoutSeriesInput } from "../inputs/LanguageUpdateManyWithWhereWithoutSeriesInput";
import { LanguageUpdateWithWhereUniqueWithoutSeriesInput } from "../inputs/LanguageUpdateWithWhereUniqueWithoutSeriesInput";
import { LanguageUpsertWithWhereUniqueWithoutSeriesInput } from "../inputs/LanguageUpsertWithWhereUniqueWithoutSeriesInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";
export declare class LanguageUpdateManyWithoutSeriesInput {
    create?: LanguageCreateWithoutSeriesInput[] | undefined;
    connectOrCreate?: LanguageCreateOrConnectWithoutSeriesInput[] | undefined;
    upsert?: LanguageUpsertWithWhereUniqueWithoutSeriesInput[] | undefined;
    connect?: LanguageWhereUniqueInput[] | undefined;
    set?: LanguageWhereUniqueInput[] | undefined;
    disconnect?: LanguageWhereUniqueInput[] | undefined;
    delete?: LanguageWhereUniqueInput[] | undefined;
    update?: LanguageUpdateWithWhereUniqueWithoutSeriesInput[] | undefined;
    updateMany?: LanguageUpdateManyWithWhereWithoutSeriesInput[] | undefined;
    deleteMany?: LanguageScalarWhereInput[] | undefined;
}
