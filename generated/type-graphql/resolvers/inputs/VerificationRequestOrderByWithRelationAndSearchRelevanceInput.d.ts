import { VerificationRequestOrderByRelevanceInput } from "../inputs/VerificationRequestOrderByRelevanceInput";
export declare class VerificationRequestOrderByWithRelationAndSearchRelevanceInput {
    identifier?: "asc" | "desc" | undefined;
    token?: "asc" | "desc" | undefined;
    expires?: "asc" | "desc" | undefined;
    _relevance?: VerificationRequestOrderByRelevanceInput | undefined;
}
