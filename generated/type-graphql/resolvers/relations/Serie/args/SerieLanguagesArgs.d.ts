import { LanguageOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/LanguageOrderByWithRelationAndSearchRelevanceInput";
import { LanguageWhereInput } from "../../../inputs/LanguageWhereInput";
import { LanguageWhereUniqueInput } from "../../../inputs/LanguageWhereUniqueInput";
export declare class SerieLanguagesArgs {
    where?: LanguageWhereInput | undefined;
    orderBy?: LanguageOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: LanguageWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "createdAt" | "updatedAt" | "seriesId"> | undefined;
}
