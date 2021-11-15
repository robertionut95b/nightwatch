import { SerieCreateOrConnectWithoutGenresInput } from "../inputs/SerieCreateOrConnectWithoutGenresInput";
import { SerieCreateWithoutGenresInput } from "../inputs/SerieCreateWithoutGenresInput";
import { SerieScalarWhereInput } from "../inputs/SerieScalarWhereInput";
import { SerieUpdateManyWithWhereWithoutGenresInput } from "../inputs/SerieUpdateManyWithWhereWithoutGenresInput";
import { SerieUpdateWithWhereUniqueWithoutGenresInput } from "../inputs/SerieUpdateWithWhereUniqueWithoutGenresInput";
import { SerieUpsertWithWhereUniqueWithoutGenresInput } from "../inputs/SerieUpsertWithWhereUniqueWithoutGenresInput";
import { SerieWhereUniqueInput } from "../inputs/SerieWhereUniqueInput";
export declare class SerieUpdateManyWithoutGenresInput {
    create?: SerieCreateWithoutGenresInput[] | undefined;
    connectOrCreate?: SerieCreateOrConnectWithoutGenresInput[] | undefined;
    upsert?: SerieUpsertWithWhereUniqueWithoutGenresInput[] | undefined;
    connect?: SerieWhereUniqueInput[] | undefined;
    set?: SerieWhereUniqueInput[] | undefined;
    disconnect?: SerieWhereUniqueInput[] | undefined;
    delete?: SerieWhereUniqueInput[] | undefined;
    update?: SerieUpdateWithWhereUniqueWithoutGenresInput[] | undefined;
    updateMany?: SerieUpdateManyWithWhereWithoutGenresInput[] | undefined;
    deleteMany?: SerieScalarWhereInput[] | undefined;
}
