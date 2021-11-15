import { SerieCreateOrConnectWithoutActorsInput } from "../inputs/SerieCreateOrConnectWithoutActorsInput";
import { SerieCreateWithoutActorsInput } from "../inputs/SerieCreateWithoutActorsInput";
import { SerieWhereUniqueInput } from "../inputs/SerieWhereUniqueInput";
export declare class SerieCreateNestedOneWithoutActorsInput {
    create?: SerieCreateWithoutActorsInput | undefined;
    connectOrCreate?: SerieCreateOrConnectWithoutActorsInput | undefined;
    connect?: SerieWhereUniqueInput | undefined;
}
