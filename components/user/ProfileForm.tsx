import Profile from '@components/nav/Profile';
import Divider from '@components/utils/layout/divider/divider';
import { MinimalSpinner } from '@components/utils/layout/spinners/minimalSpinner';
import { User } from '@prisma/client';
import { useSession } from 'next-auth/client';
import { useState, useEffect, FormEvent } from 'react';

interface IProfileDetailsFormProps {
  email?: {
    value: string;
  };
  firstName?: {
    value: string;
  };
  lastName?: {
    value: string;
  };
  userName?: {
    value: string;
  };
}

export const ProfileForm = (): JSX.Element => {
  const [session, loading] = useSession();
  const [user, setUser] = useState<User>(session?.user as User);

  useEffect(() => {
    if (session) setUser(session.user as User);
  }, [session]);

  const renderAvatar = (): JSX.Element => {
    if (user.image) return <Profile />;
    else
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clipRule="evenodd"
          />
        </svg>
      );
  };

  const submitProfileDetailsForm = (
    e: FormEvent<HTMLFormElement> & {
      target: { elements: IProfileDetailsFormProps };
    },
  ): void => {
    e.preventDefault();
    const { email, firstName, lastName, userName } = e.target.elements;
    console.log(email?.value);
  };

  return (
    <section>
      <h4 className="font-bold text-xl tracking-wide">Profile</h4>
      <p className="text-gray-200 mb-4">
        This section will contain the public information about the user&apos;s
        profile
      </p>
      {loading ? (
        <MinimalSpinner />
      ) : (
        <>
          <form className="profile-pic flex flex-col gap-y-2">
            <h4 className="font-bold text-lg tracking-wide">Avatar</h4>
            <p className="text-gray-200 mb-4">User personal photography</p>
            <span className="font-semibold text-md">Photo</span>
            <div className="flex items-center gap-x-2">
              {renderAvatar()}
              <input
                className="btn-primary"
                type="file"
                id="profilePic"
                name="profilePic"
              />
            </div>
          </form>
          <Divider />
          <form
            className="basic-profile-information flex flex-col gap-y-2"
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            onSubmit={(e) => submitProfileDetailsForm(e)}
          >
            <h4 className="font-bold text-lg tracking-wide">
              Personal information
            </h4>
            <p className="text-gray-200 mb-4">
              Basic information such as email address, last name, first name,
              address
            </p>
            <label htmlFor="email">Email address *</label>
            <input
              className="rounded py-1 px-2"
              name="email"
              type="email"
              placeholder="johndoe@nightwatch.org"
              disabled
              defaultValue={user?.email}
            />
            <label htmlFor="username">Username</label>
            <input
              className="rounded py-1 px-2 text-black placeholder-gray-800"
              name="username"
              type="username"
              placeholder="johndoe"
              defaultValue={user?.username || undefined}
            />
            <label htmlFor="firstName">First name</label>
            <input
              className="rounded py-1 px-2 text-black placeholder-gray-800"
              name="firstName"
              type="text"
              placeholder="John"
              defaultValue={user?.firstName || undefined}
            />
            <label htmlFor="lastName">Last name</label>
            <input
              className="rounded py-1 px-2 text-black placeholder-gray-800"
              name="lastName"
              type="text"
              placeholder="Doe"
              defaultValue={user?.lastName || undefined}
            />
            <div className="button-groups mt-4 self-end flex gap-x-2">
              <button
                className="btn-primary bg-gray-200 text-primary hover:bg-gray-400 font-semibold"
                type="reset"
              >
                Cancel
              </button>
              <button
                className="btn-primary bg-primary font-semibold"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </>
      )}
    </section>
  );
};

export default ProfileForm;
