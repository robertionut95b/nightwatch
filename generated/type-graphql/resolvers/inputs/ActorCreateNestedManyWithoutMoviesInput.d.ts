import { ActorCreateOrConnectWithoutMoviesInput } from "../inputs/ActorCreateOrConnectWithoutMoviesInput";
import { ActorCreateWithoutMoviesInput } from "../inputs/ActorCreateWithoutMoviesInput";
import { ActorWhereUniqueInput } from "../inputs/ActorWhereUniqueInput";
export declare class ActorCreateNestedManyWithoutMoviesInput {
    create?: ActorCreateWithoutMoviesInput[] | undefined;
    connectOrCreate?: ActorCreateOrConnectWithoutMoviesInput[] | undefined;
    connect?: ActorWhereUniqueInput[] | undefined;
}
