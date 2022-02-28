import { Avatar } from '@chakra-ui/react';
import { useSession } from 'next-auth/client';
import React, { useEffect } from 'react';

const Profile = ({ minimal }: { minimal?: boolean }): JSX.Element => {
  const [session] = useSession();
  const [email] = React.useState<string>(session?.user?.email || '');
  const [image, setImage] = React.useState<string | null | undefined>(
    session?.user?.image,
  );

  useEffect(() => {
    if (session?.user?.image) {
      setImage(session.user.image);
    }
  }, [session?.user?.image]);

  if (minimal)
    return (
      <div className="profile">
        <div className="profile-picture flex justify-between rounded-full">
          {image && (
            <Avatar src={image} alt="profile picture" width={34} height={34} />
          )}
          {!image && (
            <Avatar
              name={email}
              width={34}
              height={34}
              bgColor="gray.800"
              showBorder
              borderRadius={'50%'}
              borderWidth={1}
              borderColor={'gray'}
            />
          )}
        </div>
      </div>
    );

  return (
    <div className="profile">
      <div className="profile-picture flex items-center justify-between gap-x-4 rounded-full py-1 px-2">
        {image && (
          <Avatar src={image} alt="profile picture" width={34} height={34} />
        )}
        {!image && (
          <Avatar
            name={email}
            width={54}
            height={54}
            showBorder
            bgColor="gray.800"
            borderRadius={'50%'}
            borderColor={'var(--color-primary)'}
          />
        )}
        <div className="email-label text-black dark:text-white">
          {session?.user?.email}
        </div>
      </div>
    </div>
  );
};

export default Profile;
