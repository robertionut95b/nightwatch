import { ApolloError } from '@apollo/client';
import { createStandaloneToast } from '@chakra-ui/react';
import { Comment } from '@prisma/client';
import { AppSession } from 'pages/api/auth/[...nextauth]';
import {
  useDeleteCommentMutation,
  useDeleteManyCommentMutation,
} from '../../../generated/graphql';
import { toastDefaults } from 'assets/constants/config';

interface ICommentDeleteResp {
  loading: boolean;
  deleteComment: (commentId: Comment['id'], session: AppSession) => void;
}

const useCommentDelete = (options: {
  onSuccess?: () => void;
  onError?: (err: ApolloError | undefined) => void;
}): ICommentDeleteResp => {
  const toast = createStandaloneToast();
  const { onSuccess, onError } = options;

  const [deleteManyCommentMutation] = useDeleteManyCommentMutation({
    onCompleted: () => {
      onSuccess?.();
    },
    onError: (err) => {
      onError?.(err);
    },
  });
  const [deleteCommentMutation, { loading }] = useDeleteCommentMutation({
    onCompleted: () => {
      onSuccess?.();
    },
    onError: (err) => {
      onError?.(err);
    },
  });

  const deleteComment = (
    commentId: Comment['id'],
    session: AppSession | null,
  ) => {
    if (!session)
      toast({
        title: 'Action not allowed. Must login first',
        status: 'error',
        ...toastDefaults,
      });

    if (!commentId) {
      toast({
        title: 'Invalid comment',
        status: 'error',
        ...toastDefaults,
      });
      return;
    }

    deleteCommentMutation({
      variables: {
        where: {
          id: commentId || undefined,
        },
      },
    });

    deleteManyCommentMutation({
      variables: {
        where: {
          parentId: {
            equals: commentId || undefined,
          },
        },
      },
    });
  };

  return {
    loading,
    deleteComment,
  };
};

export default useCommentDelete;
