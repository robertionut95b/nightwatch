import { SerieCreateInput } from "../../../inputs/SerieCreateInput";
import { SerieUpdateInput } from "../../../inputs/SerieUpdateInput";
import { SerieWhereUniqueInput } from "../../../inputs/SerieWhereUniqueInput";
export declare class UpsertSerieArgs {
    where: SerieWhereUniqueInput;
    create: SerieCreateInput;
    update: SerieUpdateInput;
}
