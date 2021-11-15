import { DirectorCreateManySeriesInputEnvelope } from "../inputs/DirectorCreateManySeriesInputEnvelope";
import { DirectorCreateOrConnectWithoutSeriesInput } from "../inputs/DirectorCreateOrConnectWithoutSeriesInput";
import { DirectorCreateWithoutSeriesInput } from "../inputs/DirectorCreateWithoutSeriesInput";
import { DirectorScalarWhereInput } from "../inputs/DirectorScalarWhereInput";
import { DirectorUpdateManyWithWhereWithoutSeriesInput } from "../inputs/DirectorUpdateManyWithWhereWithoutSeriesInput";
import { DirectorUpdateWithWhereUniqueWithoutSeriesInput } from "../inputs/DirectorUpdateWithWhereUniqueWithoutSeriesInput";
import { DirectorUpsertWithWhereUniqueWithoutSeriesInput } from "../inputs/DirectorUpsertWithWhereUniqueWithoutSeriesInput";
import { DirectorWhereUniqueInput } from "../inputs/DirectorWhereUniqueInput";
export declare class DirectorUpdateManyWithoutSeriesInput {
    create?: DirectorCreateWithoutSeriesInput[] | undefined;
    connectOrCreate?: DirectorCreateOrConnectWithoutSeriesInput[] | undefined;
    upsert?: DirectorUpsertWithWhereUniqueWithoutSeriesInput[] | undefined;
    createMany?: DirectorCreateManySeriesInputEnvelope | undefined;
    connect?: DirectorWhereUniqueInput[] | undefined;
    set?: DirectorWhereUniqueInput[] | undefined;
    disconnect?: DirectorWhereUniqueInput[] | undefined;
    delete?: DirectorWhereUniqueInput[] | undefined;
    update?: DirectorUpdateWithWhereUniqueWithoutSeriesInput[] | undefined;
    updateMany?: DirectorUpdateManyWithWhereWithoutSeriesInput[] | undefined;
    deleteMany?: DirectorScalarWhereInput[] | undefined;
}
