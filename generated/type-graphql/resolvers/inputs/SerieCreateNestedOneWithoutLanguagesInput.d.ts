import { SerieCreateOrConnectWithoutLanguagesInput } from "../inputs/SerieCreateOrConnectWithoutLanguagesInput";
import { SerieCreateWithoutLanguagesInput } from "../inputs/SerieCreateWithoutLanguagesInput";
import { SerieWhereUniqueInput } from "../inputs/SerieWhereUniqueInput";
export declare class SerieCreateNestedOneWithoutLanguagesInput {
    create?: SerieCreateWithoutLanguagesInput | undefined;
    connectOrCreate?: SerieCreateOrConnectWithoutLanguagesInput | undefined;
    connect?: SerieWhereUniqueInput | undefined;
}
