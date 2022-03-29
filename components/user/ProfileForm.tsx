import { Avatar, createStandaloneToast } from '@chakra-ui/react';
import Divider from '@components/utils/layout/divider/divider';
import { MinimalSpinner } from '@components/utils/layout/spinners/minimalSpinner';
import { Role, User } from '@prisma/client';
import { toastDefaults } from 'assets/constants/config';
import axios from 'axios';
import { useSession } from 'next-auth/client';
import { useState, useEffect } from 'react';
import UserForm from './UserForm';
import ShowIfElse from '@components/utils/layout/showConditional/showIfElse';

export const ProfileForm = (): JSX.Element => {
  const [session, loading] = useSession();
  const [user, setUser] = useState<User>(session?.user as User);
  const [userImage, setUserImage] = useState<string | ArrayBuffer | null>();
  const toast = createStandaloneToast();

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
      <h4 className="text-xl font-bold tracking-wide">Profile</h4>
      <p className="mb-4 dark:text-gray-200">
        This section will contain the public information about the user&apos;s
        profile
      </p>
      <ShowIfElse if={!loading} else={<MinimalSpinner />}>
        <article className="profile-pic flex flex-col gap-y-2">
          <h4 className="text-lg font-bold tracking-wide">Avatar</h4>
          <p className="mb-4 dark:text-gray-200">User personal photograph</p>
          <span className="text-md font-semibold">Photo</span>
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
          <h4 className="text-lg font-bold tracking-wide">
            Personal information
          </h4>
          <p className="mb-4 dark:text-gray-200">
            Basic information such as email address, last name, first name,
            address
          </p>
          <UserForm
            user={{
              id: user?.id,
              username: user?.username,
              firstName: user?.firstName,
              lastName: user?.lastName,
              role: (session?.role as Role | undefined) || undefined,
            }}
            showFields={['firstName', 'lastName', 'username']}
          />
        </article>
      </ShowIfElse>
    </section>
  );
};

export default ProfileForm;
