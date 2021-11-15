import { SerieCreateOrConnectWithoutLanguagesInput } from "../inputs/SerieCreateOrConnectWithoutLanguagesInput";
import { SerieCreateWithoutLanguagesInput } from "../inputs/SerieCreateWithoutLanguagesInput";
import { SerieUpdateWithoutLanguagesInput } from "../inputs/SerieUpdateWithoutLanguagesInput";
import { SerieUpsertWithoutLanguagesInput } from "../inputs/SerieUpsertWithoutLanguagesInput";
import { SerieWhereUniqueInput } from "../inputs/SerieWhereUniqueInput";
export declare class SerieUpdateOneWithoutLanguagesInput {
    create?: SerieCreateWithoutLanguagesInput | undefined;
    connectOrCreate?: SerieCreateOrConnectWithoutLanguagesInput | undefined;
    upsert?: SerieUpsertWithoutLanguagesInput | undefined;
    connect?: SerieWhereUniqueInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    update?: SerieUpdateWithoutLanguagesInput | undefined;
}
