import { SeasonCreateManySeriesInputEnvelope } from "../inputs/SeasonCreateManySeriesInputEnvelope";
import { SeasonCreateOrConnectWithoutSeriesInput } from "../inputs/SeasonCreateOrConnectWithoutSeriesInput";
import { SeasonCreateWithoutSeriesInput } from "../inputs/SeasonCreateWithoutSeriesInput";
import { SeasonWhereUniqueInput } from "../inputs/SeasonWhereUniqueInput";
export declare class SeasonCreateNestedManyWithoutSeriesInput {
    create?: SeasonCreateWithoutSeriesInput[] | undefined;
    connectOrCreate?: SeasonCreateOrConnectWithoutSeriesInput[] | undefined;
    createMany?: SeasonCreateManySeriesInputEnvelope | undefined;
    connect?: SeasonWhereUniqueInput[] | undefined;
}
