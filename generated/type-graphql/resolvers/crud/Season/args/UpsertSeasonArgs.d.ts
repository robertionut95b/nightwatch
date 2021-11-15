import { SeasonCreateInput } from "../../../inputs/SeasonCreateInput";
import { SeasonUpdateInput } from "../../../inputs/SeasonUpdateInput";
import { SeasonWhereUniqueInput } from "../../../inputs/SeasonWhereUniqueInput";
export declare class UpsertSeasonArgs {
    where: SeasonWhereUniqueInput;
    create: SeasonCreateInput;
    update: SeasonUpdateInput;
}
