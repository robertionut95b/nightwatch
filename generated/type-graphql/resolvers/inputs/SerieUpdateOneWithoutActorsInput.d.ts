import { SerieCreateOrConnectWithoutActorsInput } from "../inputs/SerieCreateOrConnectWithoutActorsInput";
import { SerieCreateWithoutActorsInput } from "../inputs/SerieCreateWithoutActorsInput";
import { SerieUpdateWithoutActorsInput } from "../inputs/SerieUpdateWithoutActorsInput";
import { SerieUpsertWithoutActorsInput } from "../inputs/SerieUpsertWithoutActorsInput";
import { SerieWhereUniqueInput } from "../inputs/SerieWhereUniqueInput";
export declare class SerieUpdateOneWithoutActorsInput {
    create?: SerieCreateWithoutActorsInput | undefined;
    connectOrCreate?: SerieCreateOrConnectWithoutActorsInput | undefined;
    upsert?: SerieUpsertWithoutActorsInput | undefined;
    connect?: SerieWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: SerieUpdateWithoutActorsInput | undefined;
}
