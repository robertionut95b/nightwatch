import { SeasonCreateManySeriesInputEnvelope } from "../inputs/SeasonCreateManySeriesInputEnvelope";
import { SeasonCreateOrConnectWithoutSeriesInput } from "../inputs/SeasonCreateOrConnectWithoutSeriesInput";
import { SeasonCreateWithoutSeriesInput } from "../inputs/SeasonCreateWithoutSeriesInput";
import { SeasonScalarWhereInput } from "../inputs/SeasonScalarWhereInput";
import { SeasonUpdateManyWithWhereWithoutSeriesInput } from "../inputs/SeasonUpdateManyWithWhereWithoutSeriesInput";
import { SeasonUpdateWithWhereUniqueWithoutSeriesInput } from "../inputs/SeasonUpdateWithWhereUniqueWithoutSeriesInput";
import { SeasonUpsertWithWhereUniqueWithoutSeriesInput } from "../inputs/SeasonUpsertWithWhereUniqueWithoutSeriesInput";
import { SeasonWhereUniqueInput } from "../inputs/SeasonWhereUniqueInput";
export declare class SeasonUpdateManyWithoutSeriesInput {
    create?: SeasonCreateWithoutSeriesInput[] | undefined;
    connectOrCreate?: SeasonCreateOrConnectWithoutSeriesInput[] | undefined;
    upsert?: SeasonUpsertWithWhereUniqueWithoutSeriesInput[] | undefined;
    createMany?: SeasonCreateManySeriesInputEnvelope | undefined;
    connect?: SeasonWhereUniqueInput[] | undefined;
    set?: SeasonWhereUniqueInput[] | undefined;
    disconnect?: SeasonWhereUniqueInput[] | undefined;
    delete?: SeasonWhereUniqueInput[] | undefined;
    update?: SeasonUpdateWithWhereUniqueWithoutSeriesInput[] | undefined;
    updateMany?: SeasonUpdateManyWithWhereWithoutSeriesInput[] | undefined;
    deleteMany?: SeasonScalarWhereInput[] | undefined;
}
