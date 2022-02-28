import Image from 'next/image';
import { toastDefaults } from '../../../../assets/constants/config';
import { createStandaloneToast } from '@chakra-ui/react';
import { MinimalSpinner } from '../../../utils/layout/spinners/minimalSpinner';
import { Episode, Role, Season, Comment } from '@prisma/client';
import { useIsBookmarked } from '../card/useIsBookmarked';
import ShowIfElse from '@components/utils/layout/showConditional/showIfElse';
import { Placeholder } from '@components/utils/layout/placeholders/placeholder';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';
import Divider from '@components/utils/layout/divider/divider';
import CommentCard from '@components/items/comments/commentCard';
import useCommentReply from '@components/items/comments/useCommentReply';
import { FormEvent } from 'react';
import { AppSession } from 'pages/api/auth/[...nextauth]';

export default function EpisodeDetailsCard({
  episode,
}: {
  episode: Episode & {
    comments: (Comment & {
      user: {
        email: string;
        image: string | null;
        role: Role;
      };
      comments: (Comment & {
        user: {
          email: string;
          image: string | null;
          role: Role;
        };
      })[];
    })[];
    season: Season & {
      series: {
        title: string;
      };
    };
  };
}): JSX.Element {
  const toast = createStandaloneToast();
  const {
    query: { seriesId, seasonId },
    reload,
  } = useRouter();
  const [session] = useSession();

  const {
    isBookmarked,
    addToWatchlist,
    loading: loadingBookmark,
  } = useIsBookmarked(episode.id, {
    onSuccess: () => {
      toast({
        title: isBookmarked ? 'Removed from watchlist' : 'Added to watchlist',
        status: isBookmarked ? 'info' : 'success',
        ...toastDefaults,
      });
    },
    onError: (err) => {
      if (err?.message.includes('Not Authorised')) {
        toast({
          title: 'Action not allowed. Must login first',
          status: 'error',
          ...toastDefaults,
        });
      } else {
        toast({
          title: 'Failed to remove from watchlist',
          status: 'error',
          ...toastDefaults,
        });
      }
    },
  });
  const bookmarkButton = (): JSX.Element => {
    if (loadingBookmark) {
      return (
        <button className="btn-primary mt-6 flex p-2 md:mt-12">
          <MinimalSpinner color="white" />
          <span className="hidden">.</span>
        </button>
      );
    }
    if (isBookmarked) {
      return (
        <button
          className="btn-primary mt-6 flex gap-x-1 md:mt-12"
          onClick={addToWatchlist}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          In watchlist
        </button>
      );
    }
    return (
      <button className="btn-primary mt-6 md:mt-12" onClick={addToWatchlist}>
        Add to watchlist
      </button>
    );
  };

  const { loading, createComment } = useCommentReply({
    objectType: 'episode',
    onError: (err) => {
      if (err?.message.includes('Not Authorised')) {
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
      reload();
    },
  });

  const submitComment = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const event = e as FormEvent<HTMLFormElement> & {
      target: { elements: { message: { value: string } } };
    };

    const message = event.target.elements.message.value;

    const appSession = session as AppSession;
    createComment(message, episode.id, appSession);
  };

  return (
    <div className="movie-card-details text-black dark:text-white">
      <div className="relative grid grid-cols-1 place-items-start gap-x-2 md:grid-cols-3">
        <div className="content-info col-span-2 flex flex-col items-center gap-y-2 md:items-start">
          <h2 className="mb-4 text-3xl font-bold">{episode.title}</h2>
          <Link
            href={`/series/${seriesId}/seasons/${seasonId}/episodes/`}
            passHref
          >
            <a>
              <h4 className="text-1xl mb-4 font-bold">{`${episode.season.series?.title} - Season ${seasonId}`}</h4>
            </a>
          </Link>
          <ul className="flex flex-row flex-wrap items-center gap-x-4 gap-y-2 md:items-start">
            <li>
              🎥 {episode.runtime} <small>minutes</small>
            </li>
            <li>
              ⭐ {episode.imdbRating}/<small>10</small>
            </li>
          </ul>
          <ShowIfElse
            if={episode.plot}
            else={
              <p className="mt-4 text-center md:text-left">
                This episode has no description yet. Be the first to update it!
              </p>
            }
          >
            <p className="mt-4 text-center md:text-left">{episode.plot}</p>
          </ShowIfElse>
          {bookmarkButton()}
        </div>
        <div className="image-poster relative order-first place-self-center md:order-last">
          <ShowIfElse
            if={episode.poster}
            else={<Placeholder width={290} height={400} />}
          >
            <Image src={episode.poster} width={290} height={400} alt="poster" />
          </ShowIfElse>
        </div>
      </div>
      <div className="comments mt-16">
        <h6 className="mb-4 text-3xl font-bold">Comments</h6>
        <div className="comments-list flex flex-col gap-y-4">
          <ShowIfElse
            if={episode?.comments?.length > 0}
            else={
              <h4 className="text-md font-normal">
                No comments yet. Be the first to comment!
              </h4>
            }
          >
            <>
              {episode?.comments?.map((comment, idx) => (
                <CommentCard
                  key={idx}
                  {...comment}
                  showChildComments
                  objectType="episode"
                  entityId={episode.id}
                />
              ))}
            </>
          </ShowIfElse>
        </div>
        <Divider />
        <div className="comments-form flex flex-col">
          <h4 className="mb-4 text-lg font-semibold">Save your comment</h4>
          <form
            className="flex flex-col gap-y-2"
            onSubmit={(e) => submitComment(e)}
          >
            <label htmlFor="message">Message</label>
            <textarea
              className="w-full rounded-lg bg-gray-100 p-2 px-3 text-black dark:border-none dark:bg-none dark:text-gray-700"
              name="message"
              id="message-input"
              placeholder="Aa"
              required
              rows={3}
            />
            <button
              className="btn-primary-outline mt-4 place-self-end disabled:cursor-not-allowed dark:text-white dark:disabled:bg-primary-hover"
              type="submit"
              disabled={loading || !session}
            >
              {loading ? <MinimalSpinner color="white" /> : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
