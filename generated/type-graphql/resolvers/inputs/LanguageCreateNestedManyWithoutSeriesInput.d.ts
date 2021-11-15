import { LanguageCreateManySeriesInputEnvelope } from "../inputs/LanguageCreateManySeriesInputEnvelope";
import { LanguageCreateOrConnectWithoutSeriesInput } from "../inputs/LanguageCreateOrConnectWithoutSeriesInput";
import { LanguageCreateWithoutSeriesInput } from "../inputs/LanguageCreateWithoutSeriesInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";
export declare class LanguageCreateNestedManyWithoutSeriesInput {
    create?: LanguageCreateWithoutSeriesInput[] | undefined;
    connectOrCreate?: LanguageCreateOrConnectWithoutSeriesInput[] | undefined;
    createMany?: LanguageCreateManySeriesInputEnvelope | undefined;
    connect?: LanguageWhereUniqueInput[] | undefined;
}
