import { Avatar } from '@chakra-ui/react';
import ShowIf from '@components/utils/layout/showConditional/showIf';
import { Comment } from '@prisma/client';
import formatDistance from 'date-fns/formatDistance';
import { FormEvent, useCallback, useState } from 'react';

const censorWord = (str: string): string => {
  return str[0] + '*'.repeat(str.length - 2) + str.slice(-1);
};

const censorEmail = (email: string): string => {
  const arr = email.split('@');
  return censorWord(arr[0]) + '@' + censorWord(arr[1]);
};

export default function CommentCard({
  message,
  user,
  createdAt,
  comments,
  showChildComments = false,
}: {
  showChildComments?: boolean;
} & Comment & {
    user: { email: string; image: string | null };
    comments: (Comment & {
      user: { email: string; image: string | null };
    })[];
  }): JSX.Element {
  const [toggleReply, setToggleReply] = useState<boolean>(false);

  const clickReplyToComment = useCallback(() => {
    setToggleReply(!toggleReply);
  }, [toggleReply]);

  const submitReply = useCallback((e: FormEvent<HTMLFormElement>) => {
    // process the graphql request then close the toggler
    e.preventDefault();
    setToggleReply(false);
  }, []);

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
        <div className="flex items-start justify-start gap-x-4">
          <strong className="text-sm tracking-wide">
            {censorEmail(user.email)}
          </strong>
          <small className="text-xs tracking-wide">
            {formatDistance(new Date(createdAt.toString()), new Date(), {
              addSuffix: true,
            })}
          </small>
        </div>
        <p>{message}</p>
        <div className="comment-options mt-2">
          <ShowIf if={showChildComments}>
            <div className="comment-reply">
              <button
                className="flex items-center gap-x-1 text-sm"
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
            </div>
          </ShowIf>
          <ShowIf if={toggleReply}>
            <form
              className="mt-2 flex w-full flex-col"
              onSubmit={(e) => submitReply(e)}
            >
              <textarea
                className="w-full rounded-lg bg-gray-100 p-2 px-3 text-black dark:border-none dark:bg-none dark:text-gray-700"
                name="message"
                id="message-input"
                placeholder="Aa"
                required
                rows={2}
              />
              <button
                className="btn-primary-outline mt-4 place-self-end p-2 py-1 text-sm disabled:bg-zinc-600 dark:text-white"
                type="submit"
              >
                Submit
              </button>
            </form>
          </ShowIf>
        </div>
        <ShowIf if={showChildComments}>
          <div className="child-comments">
            <ShowIf if={comments?.length > 0}>
              <div className="child-comments-list">
                {comments?.map((comment, idx) => (
                  <CommentCard comments={[]} key={idx} {...comment} />
                ))}
              </div>
            </ShowIf>
          </div>
        </ShowIf>
      </div>
    </div>
  );
}
