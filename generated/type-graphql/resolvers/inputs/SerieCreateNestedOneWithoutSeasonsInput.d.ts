import { SerieCreateOrConnectWithoutSeasonsInput } from "../inputs/SerieCreateOrConnectWithoutSeasonsInput";
import { SerieCreateWithoutSeasonsInput } from "../inputs/SerieCreateWithoutSeasonsInput";
import { SerieWhereUniqueInput } from "../inputs/SerieWhereUniqueInput";
export declare class SerieCreateNestedOneWithoutSeasonsInput {
    create?: SerieCreateWithoutSeasonsInput | undefined;
    connectOrCreate?: SerieCreateOrConnectWithoutSeasonsInput | undefined;
    connect?: SerieWhereUniqueInput | undefined;
}
