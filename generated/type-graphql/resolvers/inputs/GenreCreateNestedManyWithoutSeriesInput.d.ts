import { GenreCreateOrConnectWithoutSeriesInput } from "../inputs/GenreCreateOrConnectWithoutSeriesInput";
import { GenreCreateWithoutSeriesInput } from "../inputs/GenreCreateWithoutSeriesInput";
import { GenreWhereUniqueInput } from "../inputs/GenreWhereUniqueInput";
export declare class GenreCreateNestedManyWithoutSeriesInput {
    create?: GenreCreateWithoutSeriesInput[] | undefined;
    connectOrCreate?: GenreCreateOrConnectWithoutSeriesInput[] | undefined;
    connect?: GenreWhereUniqueInput[] | undefined;
}
