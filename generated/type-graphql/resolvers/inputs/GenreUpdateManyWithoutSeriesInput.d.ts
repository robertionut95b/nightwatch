import { GenreCreateOrConnectWithoutSeriesInput } from "../inputs/GenreCreateOrConnectWithoutSeriesInput";
import { GenreCreateWithoutSeriesInput } from "../inputs/GenreCreateWithoutSeriesInput";
import { GenreScalarWhereInput } from "../inputs/GenreScalarWhereInput";
import { GenreUpdateManyWithWhereWithoutSeriesInput } from "../inputs/GenreUpdateManyWithWhereWithoutSeriesInput";
import { GenreUpdateWithWhereUniqueWithoutSeriesInput } from "../inputs/GenreUpdateWithWhereUniqueWithoutSeriesInput";
import { GenreUpsertWithWhereUniqueWithoutSeriesInput } from "../inputs/GenreUpsertWithWhereUniqueWithoutSeriesInput";
import { GenreWhereUniqueInput } from "../inputs/GenreWhereUniqueInput";
export declare class GenreUpdateManyWithoutSeriesInput {
    create?: GenreCreateWithoutSeriesInput[] | undefined;
    connectOrCreate?: GenreCreateOrConnectWithoutSeriesInput[] | undefined;
    upsert?: GenreUpsertWithWhereUniqueWithoutSeriesInput[] | undefined;
    connect?: GenreWhereUniqueInput[] | undefined;
    set?: GenreWhereUniqueInput[] | undefined;
    disconnect?: GenreWhereUniqueInput[] | undefined;
    delete?: GenreWhereUniqueInput[] | undefined;
    update?: GenreUpdateWithWhereUniqueWithoutSeriesInput[] | undefined;
    updateMany?: GenreUpdateManyWithWhereWithoutSeriesInput[] | undefined;
    deleteMany?: GenreScalarWhereInput[] | undefined;
}
