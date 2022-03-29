import {
  createStandaloneToast,
  FormControl,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react';
import { User, Role } from '@prisma/client';
import { toastDefaults } from 'assets/constants/config';
import { format, parseISO } from 'date-fns';
import { useRouter } from 'next/router';
import { FormEvent } from 'react';
import ShowIfElse from '@components/utils/layout/showConditional/showIfElse';
import { MinimalSpinner } from '@components/utils/layout/spinners/minimalSpinner';
import { removeEmpty } from '../utils/helpers/objects';
import { isEqual } from 'lodash';
import useUpsertUser from 'src/hooks/useUpdateUser';
interface IUserFormProps {
  email?: { value: string };
  lastName?: { value: string };
  firstName?: { value: string };
  username?: { value: string };
  name?: { value: string };
  image?: { value: string };
  role?: { value: string };
}

const UserForm = ({
  user,
  readOnly = false,
  showFields = [
    'username',
    'email',
    'firstName',
    'lastName',
    'role',
    'image',
    'createdAt',
    'updatedAt',
  ],
}: {
  user?: Partial<User>;
  readOnly?: boolean;
  showFields?: (keyof User)[];
}): JSX.Element => {
  const toast = createStandaloneToast();
  const { reload } = useRouter();

  const { loading, upsertUser } = useUpsertUser({
    onSuccess: () => {
      toast({
        title: 'User information updated',
        status: 'success',
        ...toastDefaults,
      });
      reload();
    },
    onError: (err) => {
      let msg = 'Could not update user information';
      if (
        err?.message?.toLowerCase()?.includes('unique constraint') ||
        err?.message?.toLowerCase()?.includes('username')
      ) {
        msg = 'Username already taken';
      }
      toast({
        title: msg,
        status: 'error',
        ...toastDefaults,
      });
    },
  });

  const submitForm = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { firstName, lastName, username, image, role, email } =
      e.target as typeof e.target & IUserFormProps;

    const userData: Partial<User> = {
      id: user?.id,
      firstName: firstName?.value,
      lastName: lastName?.value,
      username: username?.value,
      image: image?.value,
      email: email?.value,
      role: role?.value === Role.ADMIN ? Role.ADMIN : Role.USER,
    };

    const sanitizedUserData = removeEmpty(userData);

    if (isEqual(sanitizedUserData, user)) {
      toast({
        title: 'Nothing has changed!',
        status: 'warning',
        ...toastDefaults,
      });
      return;
    }

    upsertUser(removeEmpty(userData));
  };

  return (
    <form className="flex flex-col gap-y-2" onSubmit={(e) => submitForm(e)}>
      <FormControl display={showFields.includes('lastName') ? 'block' : 'none'}>
        <FormLabel htmlFor="lastName">Last name</FormLabel>
        <Input
          id="lastName"
          type="text"
          disabled={readOnly}
          //@ts-expect-error("value will not be null")
          defaultValue={user?.lastName as Exclude<typeof user.lastName, null>}
        />
      </FormControl>
      <FormControl
        display={showFields.includes('firstName') ? 'block' : 'none'}
      >
        <FormLabel htmlFor="firstName">First name</FormLabel>
        <Input
          id="firstName"
          type="text"
          disabled={readOnly}
          defaultValue={
            //@ts-expect-error("value will not be null")
            user?.firstName as Exclude<typeof user.firstName, null>
          }
        />
      </FormControl>
      <FormControl display={showFields.includes('username') ? 'block' : 'none'}>
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input
          id="username"
          type="text"
          disabled={readOnly}
          //@ts-expect-error("value will not be null")
          defaultValue={user?.username as Exclude<typeof user.username, null>}
        />
      </FormControl>
      <FormControl display={showFields.includes('email') ? 'block' : 'none'}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          type="email"
          disabled={readOnly}
          defaultValue={user?.email}
        />
      </FormControl>
      <FormControl display={showFields.includes('role') ? 'block' : 'none'}>
        <FormLabel htmlFor="role">Role</FormLabel>
        <Select id="role" defaultValue={user?.role} disabled={readOnly}>
          <option className="text-black" value="ADMIN">
            Admin
          </option>
          <option className="text-black" value="USER">
            User
          </option>
        </Select>
      </FormControl>
      <FormControl display={showFields.includes('image') ? 'block' : 'none'}>
        <FormLabel htmlFor="image">Avatar URL</FormLabel>
        <Input
          id="image"
          type="text"
          disabled={readOnly}
          //@ts-expect-error("value will not be null")
          defaultValue={user?.image as Exclude<typeof user.image, null>}
        />
      </FormControl>
      <FormControl
        display={showFields.includes('createdAt') ? 'block' : 'none'}
      >
        <FormLabel htmlFor="createdAt">Created</FormLabel>
        <Input
          id="createdAt"
          type="datetime-local"
          disabled
          defaultValue={format(
            parseISO(user?.createdAt?.toString() || new Date().toISOString()),
            "yyyy-MM-dd'T'HH:mm",
          )}
        />
      </FormControl>
      <FormControl
        display={showFields.includes('updatedAt') ? 'block' : 'none'}
      >
        <FormLabel htmlFor="updatedAt">Updated</FormLabel>
        <Input
          id="updatedAt"
          type="datetime-local"
          disabled
          defaultValue={format(
            parseISO(user?.createdAt?.toString() || new Date().toISOString()),
            "yyyy-MM-dd'T'HH:mm",
          )}
        />
      </FormControl>
      <button
        className="btn btn-primary my-4 w-28 place-self-center bg-primary"
        type="submit"
        disabled={loading}
      >
        <ShowIfElse if={!loading} else={<MinimalSpinner color="white" />}>
          Submit
        </ShowIfElse>
      </button>
    </form>
  );
};

export default UserForm;
