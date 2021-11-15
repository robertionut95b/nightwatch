import { MovieCreateOrConnectWithoutLanguagesInput } from "../inputs/MovieCreateOrConnectWithoutLanguagesInput";
import { MovieCreateWithoutLanguagesInput } from "../inputs/MovieCreateWithoutLanguagesInput";
import { MovieScalarWhereInput } from "../inputs/MovieScalarWhereInput";
import { MovieUpdateManyWithWhereWithoutLanguagesInput } from "../inputs/MovieUpdateManyWithWhereWithoutLanguagesInput";
import { MovieUpdateWithWhereUniqueWithoutLanguagesInput } from "../inputs/MovieUpdateWithWhereUniqueWithoutLanguagesInput";
import { MovieUpsertWithWhereUniqueWithoutLanguagesInput } from "../inputs/MovieUpsertWithWhereUniqueWithoutLanguagesInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";
export declare class MovieUpdateManyWithoutLanguagesInput {
    create?: MovieCreateWithoutLanguagesInput[] | undefined;
    connectOrCreate?: MovieCreateOrConnectWithoutLanguagesInput[] | undefined;
    upsert?: MovieUpsertWithWhereUniqueWithoutLanguagesInput[] | undefined;
    connect?: MovieWhereUniqueInput[] | undefined;
    set?: MovieWhereUniqueInput[] | undefined;
    disconnect?: MovieWhereUniqueInput[] | undefined;
    delete?: MovieWhereUniqueInput[] | undefined;
    update?: MovieUpdateWithWhereUniqueWithoutLanguagesInput[] | undefined;
    updateMany?: MovieUpdateManyWithWhereWithoutLanguagesInput[] | undefined;
    deleteMany?: MovieScalarWhereInput[] | undefined;
}
