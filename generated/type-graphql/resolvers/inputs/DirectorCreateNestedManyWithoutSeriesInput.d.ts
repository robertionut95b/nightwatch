import { DirectorCreateManySeriesInputEnvelope } from "../inputs/DirectorCreateManySeriesInputEnvelope";
import { DirectorCreateOrConnectWithoutSeriesInput } from "../inputs/DirectorCreateOrConnectWithoutSeriesInput";
import { DirectorCreateWithoutSeriesInput } from "../inputs/DirectorCreateWithoutSeriesInput";
import { DirectorWhereUniqueInput } from "../inputs/DirectorWhereUniqueInput";
export declare class DirectorCreateNestedManyWithoutSeriesInput {
    create?: DirectorCreateWithoutSeriesInput[] | undefined;
    connectOrCreate?: DirectorCreateOrConnectWithoutSeriesInput[] | undefined;
    createMany?: DirectorCreateManySeriesInputEnvelope | undefined;
    connect?: DirectorWhereUniqueInput[] | undefined;
}
