import { ApolloError } from '@apollo/client';
import { Role, User } from '@prisma/client';
import { useUpsertUserMutation } from '../../generated/graphql';
interface IUseUpdateUserResp {
  upsertUser: (user: Partial<User>) => void;
  loading: boolean;
}

const useUpsertUser = (options: {
  onSuccess?: () => void;
  onError?: (err: ApolloError | undefined) => void;
}): IUseUpdateUserResp => {
  const { onError, onSuccess } = options;

  const [upsertUserMutation, { loading }] = useUpsertUserMutation({
    onCompleted: () => {
      onSuccess?.();
    },
    onError: (err) => {
      onError?.(err);
    },
  });

  return {
    upsertUser: (user) =>
      upsertUserMutation({
        variables: {
          create: {
            username: user.username,
            email: user.email as Exclude<string, undefined>,
            firstName: user.firstName,
            lastName: user.lastName,
            name: user.name,
            image: user.image,
            // @ts-expect-error("Role is sent as string, but it's an enum")
            role:
              user.role === Role.ADMIN ? Role.ADMIN : Role.USER || undefined,
          },
          // @ts-expect-error("Role is sent as string, but it's an enum")
          update: {
            ...(user.username && {
              username: {
                set: user.username || undefined,
              },
            }),
            ...(user.email && {
              email: {
                set: user.email || undefined,
              },
            }),
            ...(user.firstName && {
              firstName: {
                set: user.firstName || undefined,
              },
            }),
            ...(user.lastName && {
              lastName: {
                set: user.lastName || undefined,
              },
            }),
            ...(user.name && {
              name: {
                set: user.name || undefined,
              },
            }),
            ...(user.image && {
              image: {
                set: user.image || undefined,
              },
            }),
            ...(user.role && {
              role: {
                set:
                  user.role === Role.ADMIN
                    ? Role.ADMIN
                    : Role.USER || undefined,
              },
            }),
          },
          where: {
            id: user.id || '',
          },
        },
      }),
    loading,
  };
};

export default useUpsertUser;
