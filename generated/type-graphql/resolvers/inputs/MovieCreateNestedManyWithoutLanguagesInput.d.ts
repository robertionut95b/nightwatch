import { MovieCreateOrConnectWithoutLanguagesInput } from "../inputs/MovieCreateOrConnectWithoutLanguagesInput";
import { MovieCreateWithoutLanguagesInput } from "../inputs/MovieCreateWithoutLanguagesInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";
export declare class MovieCreateNestedManyWithoutLanguagesInput {
    create?: MovieCreateWithoutLanguagesInput[] | undefined;
    connectOrCreate?: MovieCreateOrConnectWithoutLanguagesInput[] | undefined;
    connect?: MovieWhereUniqueInput[] | undefined;
}
