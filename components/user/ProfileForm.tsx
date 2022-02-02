import { Avatar, createStandaloneToast } from '@chakra-ui/react';
import Divider from '@components/utils/layout/divider/divider';
import ShowIfElse from '@components/utils/layout/showConditional/showIfElse';
import { MinimalSpinner } from '@components/utils/layout/spinners/minimalSpinner';
import { User } from '@prisma/client';
import { toastDefaults } from 'assets/constants/config';
import axios from 'axios';
import { useUpdateUserMutation } from 'generated/graphql';
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
  const [userImage, setUserImage] = useState<string | ArrayBuffer | null>();
  const toast = createStandaloneToast();

  const [updateUserMutation, { loading: updateLoading }] =
    useUpdateUserMutation({
      onCompleted: (newUserData) => {
        setUser({ ...user, ...newUserData });
        toast({
          title: 'User information updated',
          status: 'success',
          ...toastDefaults,
        });
      },
      onError: () => {
        toast({
          title: 'Could not update user information',
          status: 'error',
          ...toastDefaults,
        });
      },
    });

  useEffect(() => {
    if (session) setUser(session.user as User);
  }, [session]);

  const renderAvatar = (): JSX.Element => {
    if (userImage) return <Avatar src={userImage as string} size={'lg'} />;
    if (user?.image)
      return <Avatar src={user?.image || undefined} size={'lg'} />;
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

  const submitProfileDetailsForm = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { email, firstName, lastName, userName } =
      e.target as typeof e.target & IProfileDetailsFormProps;

    if (
      email &&
      email.value === user.email &&
      firstName &&
      firstName.value === user.firstName &&
      lastName &&
      lastName.value === user.lastName &&
      userName &&
      userName.value === user.username
    ) {
      toast({
        title: 'Nothing has changed!',
        status: 'warning',
        ...toastDefaults,
      });
      return;
    }

    updateUserMutation({
      variables: {
        data: {
          email: {
            set: email?.value,
          },
          firstName: {
            set: firstName?.value,
          },
          lastName: {
            set: lastName?.value,
          },
          username: {
            set: userName?.value,
          },
        },
        where: {
          id: user.id,
        },
      },
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const submitProfilePictureForm = (e: any): void => {
    e.preventDefault();

    const reader = new FileReader();
    reader.readAsDataURL(e.target?.files[0]);
    reader.onloadend = async () => {
      const image = reader.result;

      if (!image) {
        toast({
          title: 'Could upload image',
          status: 'error',
          ...toastDefaults,
        });
      }

      // check type
      if (image) {
        const [, type] = image.toString().split(';')[0].split('/');
        if (type !== 'jpeg' && type !== 'png' && type !== 'gif') {
          toast({
            title: 'Image must be a jpeg or png',
            status: 'error',
            ...toastDefaults,
          });
          return;
        }
      }

      setUserImage(reader.result);
      const {
        data: { imagePath },
      } = await axios.post('/api/uploads/changeAvatar', {
        image: reader.result,
        user: user.id,
      });
      setUserImage(imagePath);
    };
  };

  return (
    <section className="text-black dark:text-white">
      <h4 className="font-bold text-xl tracking-wide">Profile</h4>
      <p className="dark:text-gray-200 mb-4">
        This section will contain the public information about the user&apos;s
        profile
      </p>
      {loading ? (
        <MinimalSpinner />
      ) : (
        <>
          <article className="profile-pic flex flex-col gap-y-2">
            <h4 className="font-bold text-lg tracking-wide">Avatar</h4>
            <p className="dark:text-gray-200 mb-4">User personal photograph</p>
            <span className="font-semibold text-md">Photo</span>
            <div className="flex items-center gap-x-2">
              {renderAvatar()}
              <input
                className="hidden"
                type="file"
                id="profilePic"
                name="profilePic"
                accept="image/png, image/gif, image/jpeg"
                onChange={(e) => submitProfilePictureForm(e)}
              />
              <label htmlFor="profilePic" className="btn-primary">
                Change photo
              </label>
            </div>
          </article>
          <Divider />
          <article className="form-basic">
            <form
              className="basic-profile-information"
              onSubmit={(e) => submitProfileDetailsForm(e)}
            >
              <h4 className="font-bold text-lg tracking-wide">
                Personal information
              </h4>
              <p className="dark:text-gray-200 mb-4">
                Basic information such as email address, last name, first name,
                address
              </p>
              <div className="form-inputs flex flex-col gap-y-2">
                <label htmlFor="email">Email address *</label>
                <input
                  className="rounded py-1 px-2 border bg-slate-200 dark:bg-inherit cursor-not-allowed"
                  name="email"
                  type="email"
                  placeholder="johndoe@nightwatch.org"
                  disabled
                  defaultValue={user?.email}
                />
                <label htmlFor="username">Username</label>
                <input
                  className="rounded py-1 px-2 bg-gray-100 dark:bg-white border text-black placeholder-gray-800"
                  name="userName"
                  type="userName"
                  placeholder="johndoe"
                  defaultValue={user?.username || undefined}
                />
                <label htmlFor="firstName">First name</label>
                <input
                  className="rounded py-1 px-2 bg-gray-100 text-black border placeholder-gray-800"
                  name="firstName"
                  type="text"
                  placeholder="John"
                  defaultValue={user?.firstName || undefined}
                />
                <label htmlFor="lastName">Last name</label>
                <input
                  className="rounded py-1 px-2 bg-gray-100 text-black border placeholder-gray-800"
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  defaultValue={user?.lastName || undefined}
                />
              </div>
              <div className="button-groups mt-8 flex justify-end gap-x-2">
                <button
                  className="btn-primary bg-gray-200 text-primary hover:bg-gray-400 font-semibold"
                  type="reset"
                >
                  Cancel
                </button>
                <button
                  className="btn-primary bg-primary text-white disabled:bg-slate-700"
                  type="submit"
                  disabled={updateLoading}
                >
                  <ShowIfElse if={updateLoading} else={'Save'}>
                    <MinimalSpinner color={'white'} />
                  </ShowIfElse>
                </button>
              </div>
            </form>
          </article>
        </>
      )}
    </section>
  );
};

export default ProfileForm;
