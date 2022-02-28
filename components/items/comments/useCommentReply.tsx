import { ApolloError } from '@apollo/client';
import { useCreateCommentMutation } from '../../../generated/graphql';
import { AppSession } from 'pages/api/auth/[...nextauth]';
import { createStandaloneToast } from '@chakra-ui/react';
import { toastDefaults } from 'assets/constants/config';
import { Episode, Movie, Serie, Comment } from '@prisma/client';

interface ICommentReplyResp {
  loading: boolean;
  createComment: (
    message: string,
    entityId: Movie['id'] | Serie['id'] | Episode['id'],
    session: AppSession,
    parentCommentId?: Comment['id'],
  ) => void;
}

const useCommentReply = (options: {
  objectType: 'movie' | 'serie' | 'episode';
  onSuccess?: () => void;
  onError?: (err: ApolloError | undefined) => void;
}): ICommentReplyResp => {
  const toast = createStandaloneToast();
  const { onSuccess, onError, objectType } = options;

  const [createCommentMutation, { loading }] = useCreateCommentMutation({
    onCompleted: () => {
      onSuccess?.();
    },
    onError: (err) => {
      onError?.(err);
    },
  });

  const createComment = (
    message: string,
    entityId: Movie['id'] | Serie['id'] | Episode['id'],
    session: AppSession | null,
    parentCommentId?: Comment['id'],
  ): void => {
    if (!session)
      toast({
        title: 'Action not allowed. Must login first',
        status: 'error',
        ...toastDefaults,
      });

    if (!message) {
      toast({
        title: 'Message is required',
        status: 'error',
        ...toastDefaults,
      });
      return;
    }

    if (message.length < 10) {
      toast({
        title: 'Message must be at least 10 characters long',
        status: 'error',
        ...toastDefaults,
      });
      return;
    }

    if (parentCommentId)
      createCommentMutation({
        variables: {
          data: {
            message,
            user: {
              connect: {
                email: session?.user?.email || undefined,
              },
            },
            ...(objectType === 'movie' && {
              movie: {
                connect: {
                  id: entityId,
                },
              },
            }),
            ...(objectType === 'serie' && {
              serie: {
                connect: {
                  id: entityId,
                },
              },
            }),
            ...(objectType === 'episode' && {
              episode: {
                connect: {
                  id: entityId,
                },
              },
            }),
            parent: {
              connect: {
                id: parentCommentId || undefined,
              },
            },
          },
        },
      });
    else
      createCommentMutation({
        variables: {
          data: {
            message,
            user: {
              connect: {
                email: session?.user?.email || undefined,
              },
            },
            ...(objectType === 'movie' && {
              movie: {
                connect: {
                  id: entityId,
                },
              },
            }),
            ...(objectType === 'serie' && {
              serie: {
                connect: {
                  id: entityId,
                },
              },
            }),
            ...(objectType === 'episode' && {
              episode: {
                connect: {
                  id: entityId,
                },
              },
            }),
          },
        },
      });
  };

  return {
    loading,
    createComment,
  };
};

export default useCommentReply;
