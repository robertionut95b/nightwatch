import { VerificationRequestCountOrderByAggregateInput } from "../inputs/VerificationRequestCountOrderByAggregateInput";
import { VerificationRequestMaxOrderByAggregateInput } from "../inputs/VerificationRequestMaxOrderByAggregateInput";
import { VerificationRequestMinOrderByAggregateInput } from "../inputs/VerificationRequestMinOrderByAggregateInput";
export declare class VerificationRequestOrderByWithAggregationInput {
    identifier?: "asc" | "desc" | undefined;
    token?: "asc" | "desc" | undefined;
    expires?: "asc" | "desc" | undefined;
    _count?: VerificationRequestCountOrderByAggregateInput | undefined;
    _max?: VerificationRequestMaxOrderByAggregateInput | undefined;
    _min?: VerificationRequestMinOrderByAggregateInput | undefined;
}
