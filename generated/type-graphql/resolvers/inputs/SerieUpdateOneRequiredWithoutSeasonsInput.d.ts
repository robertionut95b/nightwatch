import { SerieCreateOrConnectWithoutSeasonsInput } from "../inputs/SerieCreateOrConnectWithoutSeasonsInput";
import { SerieCreateWithoutSeasonsInput } from "../inputs/SerieCreateWithoutSeasonsInput";
import { SerieUpdateWithoutSeasonsInput } from "../inputs/SerieUpdateWithoutSeasonsInput";
import { SerieUpsertWithoutSeasonsInput } from "../inputs/SerieUpsertWithoutSeasonsInput";
import { SerieWhereUniqueInput } from "../inputs/SerieWhereUniqueInput";
export declare class SerieUpdateOneRequiredWithoutSeasonsInput {
    create?: SerieCreateWithoutSeasonsInput | undefined;
    connectOrCreate?: SerieCreateOrConnectWithoutSeasonsInput | undefined;
    upsert?: SerieUpsertWithoutSeasonsInput | undefined;
    connect?: SerieWhereUniqueInput | undefined;
    update?: SerieUpdateWithoutSeasonsInput | undefined;
}
