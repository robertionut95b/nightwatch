import { SerieCreateOrConnectWithoutDirectorsInput } from "../inputs/SerieCreateOrConnectWithoutDirectorsInput";
import { SerieCreateWithoutDirectorsInput } from "../inputs/SerieCreateWithoutDirectorsInput";
import { SerieUpdateWithoutDirectorsInput } from "../inputs/SerieUpdateWithoutDirectorsInput";
import { SerieUpsertWithoutDirectorsInput } from "../inputs/SerieUpsertWithoutDirectorsInput";
import { SerieWhereUniqueInput } from "../inputs/SerieWhereUniqueInput";
export declare class SerieUpdateOneWithoutDirectorsInput {
    create?: SerieCreateWithoutDirectorsInput | undefined;
    connectOrCreate?: SerieCreateOrConnectWithoutDirectorsInput | undefined;
    upsert?: SerieUpsertWithoutDirectorsInput | undefined;
    connect?: SerieWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: SerieUpdateWithoutDirectorsInput | undefined;
}
