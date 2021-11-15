import { VerificationRequestOrderByWithAggregationInput } from "../../../inputs/VerificationRequestOrderByWithAggregationInput";
import { VerificationRequestScalarWhereWithAggregatesInput } from "../../../inputs/VerificationRequestScalarWhereWithAggregatesInput";
import { VerificationRequestWhereInput } from "../../../inputs/VerificationRequestWhereInput";
export declare class GroupByVerificationRequestArgs {
    where?: VerificationRequestWhereInput | undefined;
    orderBy?: VerificationRequestOrderByWithAggregationInput[] | undefined;
    by: Array<"identifier" | "token" | "expires">;
    having?: VerificationRequestScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
