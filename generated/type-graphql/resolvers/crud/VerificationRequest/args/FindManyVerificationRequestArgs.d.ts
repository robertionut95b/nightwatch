import { VerificationRequestOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/VerificationRequestOrderByWithRelationAndSearchRelevanceInput";
import { VerificationRequestWhereInput } from "../../../inputs/VerificationRequestWhereInput";
import { VerificationRequestWhereUniqueInput } from "../../../inputs/VerificationRequestWhereUniqueInput";
export declare class FindManyVerificationRequestArgs {
    where?: VerificationRequestWhereInput | undefined;
    orderBy?: VerificationRequestOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: VerificationRequestWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"identifier" | "token" | "expires"> | undefined;
}
