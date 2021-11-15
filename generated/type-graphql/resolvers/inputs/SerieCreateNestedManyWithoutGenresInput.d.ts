import { SerieCreateOrConnectWithoutGenresInput } from "../inputs/SerieCreateOrConnectWithoutGenresInput";
import { SerieCreateWithoutGenresInput } from "../inputs/SerieCreateWithoutGenresInput";
import { SerieWhereUniqueInput } from "../inputs/SerieWhereUniqueInput";
export declare class SerieCreateNestedManyWithoutGenresInput {
    create?: SerieCreateWithoutGenresInput[] | undefined;
    connectOrCreate?: SerieCreateOrConnectWithoutGenresInput[] | undefined;
    connect?: SerieWhereUniqueInput[] | undefined;
}
