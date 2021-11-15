import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
export declare class UserCreateInput {
    id?: string | undefined;
    lastName?: string | undefined;
    firstName?: string | undefined;
    username?: string | undefined;
    email: string;
    emailVerified?: Date | undefined;
    image?: string | undefined;
    role?: "USER" | "ADMIN" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    accounts?: AccountCreateNestedManyWithoutUserInput | undefined;
    sessions?: SessionCreateNestedManyWithoutUserInput | undefined;
}
