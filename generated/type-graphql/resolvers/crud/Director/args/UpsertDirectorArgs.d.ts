import { DirectorCreateInput } from "../../../inputs/DirectorCreateInput";
import { DirectorUpdateInput } from "../../../inputs/DirectorUpdateInput";
import { DirectorWhereUniqueInput } from "../../../inputs/DirectorWhereUniqueInput";
export declare class UpsertDirectorArgs {
    where: DirectorWhereUniqueInput;
    create: DirectorCreateInput;
    update: DirectorUpdateInput;
}
