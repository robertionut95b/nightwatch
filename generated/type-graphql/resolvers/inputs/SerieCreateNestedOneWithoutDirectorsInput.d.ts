import { SerieCreateOrConnectWithoutDirectorsInput } from "../inputs/SerieCreateOrConnectWithoutDirectorsInput";
import { SerieCreateWithoutDirectorsInput } from "../inputs/SerieCreateWithoutDirectorsInput";
import { SerieWhereUniqueInput } from "../inputs/SerieWhereUniqueInput";
export declare class SerieCreateNestedOneWithoutDirectorsInput {
    create?: SerieCreateWithoutDirectorsInput | undefined;
    connectOrCreate?: SerieCreateOrConnectWithoutDirectorsInput | undefined;
    connect?: SerieWhereUniqueInput | undefined;
}
