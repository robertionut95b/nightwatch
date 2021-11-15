import { LanguageCreateInput } from "../../../inputs/LanguageCreateInput";
import { LanguageUpdateInput } from "../../../inputs/LanguageUpdateInput";
import { LanguageWhereUniqueInput } from "../../../inputs/LanguageWhereUniqueInput";
export declare class UpsertLanguageArgs {
    where: LanguageWhereUniqueInput;
    create: LanguageCreateInput;
    update: LanguageUpdateInput;
}
