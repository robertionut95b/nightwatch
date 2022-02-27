import { Avatar, createStandaloneToast } from '@chakra-ui/react';
import ShowIf from '@components/utils/layout/showConditional/showIf';
import { Comment, Movie, Role, Serie, Episode } from '@prisma/client';
import { toastDefaults } from 'assets/constants/config';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { useSession } from 'next-auth/client';
import router from 'next/router';
import { AppSession } from 'pages/api/auth/[...nextauth]';
import { FormEvent, useCallback, useState } from 'react';
import useCommentDelete from './useCommentDelete';
import { MinimalSpinner } from '../../utils/layout/spinners/minimalSpinner';
import ShowIfElse from '@components/utils/layout/showConditional/showIfElse';
import useCommentReply from './useCommentReply';

export default function CommentCard({
  id,
  message,
  user,
  createdAt,
  comments,
  userId,
  entityId,
  showChildComments = false,
}: {
  entityId: Movie['id'] | Serie['id'] | Episode['id'];
  showChildComments?: boolean;
} & Comment & {
    user: { email: string; image: string | null; role: Role };
    comments: (Comment & {
      user: { email: string; image: string | null; role: Role };
    })[];
  }): JSX.Element {
  const [session] = useSession();
  const toast = createStandaloneToast();
  const appSession = session as AppSession;
  const [toggleReply, setToggleReply] = useState<boolean>(false);

  const clickReplyToComment = useCallback(
    () => setToggleReply(!toggleReply),
    [toggleReply],
  );

  const { createComment, loading: createLoading } = useCommentReply({
    onError: (err) => {
      if (err?.message.includes('Access denied')) {
        toast({
          title: 'Action not allowed. Must login first',
          status: 'error',
          ...toastDefaults,
        });
      } else {
        toast({
          title: 'Failed to reply',
          status: 'error',
          ...toastDefaults,
        });
      }
    },
    onSuccess: () => {
      toast({
        title: 'Comment added',
        status: 'success',
        ...toastDefaults,
      });
      setToggleReply(false);
      router.reload();
    },
  });

  const submitReply = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      // process the graphql request then close the toggler
      e.preventDefault();

      const event = e as FormEvent<HTMLFormElement> & {
        target: { elements: { message: { value: string } } };
      };
      const replyMessage = event.target.elements.message.value;

      createComment(replyMessage, entityId, appSession, id || undefined);
    },
    [appSession, createComment, entityId, id],
  );

  const { deleteComment, loading } = useCommentDelete({
    onError: (err) => {
      if (err?.message.includes('Access denied')) {
        toast({
          title: 'Action not allowed. Must login first',
          status: 'error',
          ...toastDefaults,
        });
      } else {
        toast({
          title: 'Failed to remove comment',
          status: 'error',
          ...toastDefaults,
        });
      }
    },
    onSuccess: () => {
      toast({
        title: 'Comment successfully removed',
        status: 'success',
        ...toastDefaults,
      });
      router.reload();
    },
  });

  return (
    <div className="flex items-baseline gap-4 rounded-lg bg-gray-100 p-4 dark:bg-background-dark">
      <div className="comment-user">
        <Avatar
          name={user.email}
          src={user.image || undefined}
          width={14}
          height={14}
        />
      </div>
      <div className="comment-info flex w-full flex-col gap-y-1">
        <div className="flex items-center gap-x-3">
          <strong className="text-sm tracking-wide">
            {user.email?.split('@')[0]}
          </strong>
          <div className="user-role-badge">
            <span
              className={`rounded-lg py-0.5 px-1.5 text-xs lowercase text-white ${
                user.role === 'ADMIN' ? 'bg-red-700' : 'bg-primary'
              }`}
            >
              {user.role}
            </span>
          </div>
          <small className="text-xs tracking-wide">
            {formatDistanceToNow(new Date(createdAt.toString()), {
              addSuffix: true,
            })}
          </small>
        </div>
        <p>{message}</p>
        <>
          <div className="comment-options flex items-center gap-x-1">
            <ShowIf if={showChildComments}>
              <button
                className="flex items-center gap-x-1 rounded p-1 text-sm hover:bg-gray-200 dark:hover:bg-primary-hover"
                onClick={clickReplyToComment}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                  <path
                    fillRule="evenodd"
                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                    clipRule="evenodd"
                  />
                </svg>
                {toggleReply ? 'Close reply' : 'Reply'}
              </button>
            </ShowIf>
            <ShowIf if={appSession?.user?.id === userId}>
              <ShowIfElse if={!loading} else={<MinimalSpinner />}>
                <button
                  className="flex items-center gap-x-1 rounded p-1 text-sm hover:bg-gray-200 dark:hover:bg-primary-hover"
                  onClick={() => deleteComment(id, appSession)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  Delete
                </button>
              </ShowIfElse>
            </ShowIf>
          </div>
        </>
        <ShowIf if={showChildComments}>
          <div className="child-comments">
            <ShowIf if={comments?.length > 0}>
              <div className="flex gap-x-1">
                <div className="w-1 rounded-lg bg-gray-400 dark:bg-primary"></div>
                <div className="child-comments-list">
                  {comments?.map((comment, idx) => (
                    <CommentCard
                      comments={[]}
                      key={idx}
                      {...comment}
                      entityId={entityId}
                    />
                  ))}
                </div>
              </div>
            </ShowIf>
          </div>
        </ShowIf>
        <ShowIf if={toggleReply}>
          <form
            className="mt-2 flex w-full flex-col"
            onSubmit={(e) => submitReply(e)}
          >
            <label className="mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full rounded-lg bg-gray-200 p-2 px-3 text-black dark:border-none dark:bg-none dark:text-gray-700"
              name="message"
              id="message-input"
              placeholder="Aa"
              required
              rows={2}
            />
            <button
              className="btn-primary-outline mt-4 place-self-end p-2 py-1 text-sm disabled:bg-zinc-600 dark:text-white dark:disabled:bg-primary-hover"
              type="submit"
              disabled={createLoading}
            >
              {createLoading ? <MinimalSpinner color="white" /> : 'Submit'}
            </button>
          </form>
        </ShowIf>
      </div>
    </div>
  );
}
