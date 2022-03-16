import { FormControl, FormLabel, Input, Select } from '@chakra-ui/react';
import { User } from '@prisma/client';
import { format, parseISO } from 'date-fns';
import { FormEvent } from 'react';

const UserForm = ({
  user,
  readOnly = false,
}: {
  user?: User;
  readOnly?: boolean;
}): JSX.Element => {
  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      email: { value: string };
      lastName: { value: string };
      firstName: { value: string };
      username: { value: string };
      name: { value: string };
      image: { value: string };
      role: { value: string };
    };

    const { email, firstName, image, lastName, name } = target;
  };

  return (
    <>
      <form className="flex flex-col gap-y-2" onSubmit={(e) => submitForm(e)}>
        <FormControl>
          <FormLabel htmlFor="lastName">Last name</FormLabel>
          <Input
            id="lastName"
            type="text"
            disabled={readOnly}
            defaultValue={user?.lastName || ''}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="firstName">First name</FormLabel>
          <Input
            id="firstName"
            type="text"
            disabled={readOnly}
            defaultValue={user?.firstName || ''}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="username">Username</FormLabel>
          <Input
            id="username"
            type="text"
            disabled={readOnly}
            defaultValue={user?.firstName || ''}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            type="email"
            disabled={readOnly}
            defaultValue={user?.email || ''}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="role">Role</FormLabel>
          <Select
            id="role"
            defaultValue={user?.role || 'USER'}
            disabled={readOnly}
          >
            <option value="ADMIN">Admin</option>
            <option value="USER">User</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="image">Avatar URL</FormLabel>
          <Input
            id="image"
            type="text"
            disabled={readOnly}
            defaultValue={user?.image || ''}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="createdAt">Created</FormLabel>
          <Input
            id="createdAt"
            type="datetime-local"
            disabled
            defaultValue={format(
              parseISO(user?.createdAt.toString() || new Date().toISOString()),
              "yyyy-MM-dd'T'HH:mm",
            )}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="updatedAt">Updated</FormLabel>
          <Input
            id="updatedAt"
            type="datetime-local"
            disabled
            defaultValue={format(
              parseISO(user?.createdAt.toString() || new Date().toISOString()),
              "yyyy-MM-dd'T'HH:mm",
            )}
          />
        </FormControl>
        <button className="btn btn-primary my-4 bg-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default UserForm;
