import Image from 'next/image';
import DateComponent from '../../../utils/helpers/date';
import MovieCard from '../card/MovieCard';
import Link from 'next/link';
import { useIsBookmarked } from '../card/useIsBookmarked';
import { toastDefaults } from '../../../../assets/constants/config';
import { createStandaloneToast } from '@chakra-ui/react';
import { MinimalSpinner } from '../../../utils/layout/spinners/minimalSpinner';
import {
  Actor,
  Director,
  Genre,
  Language,
  Movie,
  Comment,
  Role,
} from '@prisma/client';
import ShowIfElse from '@components/utils/layout/showConditional/showIfElse';
import CommentCard from '@components/items/comments/commentCard';
import Divider from '../../../utils/layout/divider/divider';
import useCommentReply from '@components/items/comments/useCommentReply';
import { useSession } from 'next-auth/client';
import { FormEvent } from 'react';
import { useRouter } from 'next/router';
import { AppSession } from 'pages/api/auth/[...nextauth]';

export default function MovieDetailsCard({
  movie,
  relatedMovies,
}: {
  movie: Movie & {
    genres: Genre[];
    actors: Actor[];
    directors: Director[];
    languages: Language[];
    comments: (Comment & {
      user: {
        email: string;
        image: string | null;
        role: Role;
      };
      comments: (Comment & {
        user: { email: string; image: string | null; role: Role };
      })[];
    })[];
  };
  relatedMovies: Movie[];
}): JSX.Element {
  const toast = createStandaloneToast();
  const router = useRouter();
  const [session] = useSession();

  const {
    isBookmarked,
    addToWatchlist,
    loading: bookmarkLoading,
  } = useIsBookmarked(movie.id, {
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
    if (bookmarkLoading) {
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
    objectType: 'movie',
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
      router.reload();
    },
  });

  const submitComment = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const event = e as FormEvent<HTMLFormElement> & {
      target: { elements: { message: { value: string } } };
    };

    const message = event.target.elements.message.value;

    const appSession = session as AppSession;
    createComment(message, movie.id, appSession);
  };

  return (
    <div className="movie-card-details text-black dark:text-white">
      <div className="relative grid grid-cols-1 place-items-start gap-x-2 md:grid-cols-3">
        <div className="content-info col-span-2 flex flex-col items-center gap-y-2 md:items-start">
          <h6 className="mb-4 text-3xl font-bold">{movie.title}</h6>
          <div className="genres mb-2">
            {movie?.genres && (
              <ul className="flex flex-wrap items-center gap-x-2 gap-y-2 md:flex-row md:items-start">
                {movie?.genres.map((g, idx) => (
                  <li
                    key={idx}
                    className="rounded-lg border border-solid px-1.5"
                  >
                    <Link href={`/movies?g=${g?.name}`}>{g?.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <ul className="flex flex-row flex-wrap items-center gap-x-4 gap-y-2 md:items-start">
            <li>
              📅 {<DateComponent dateString={movie.release.toString()} />}
            </li>
            <li>
              🎥 {movie.runtime} <small>minutes</small>
            </li>
            <li>
              ⭐ {movie.imdbRating}/<small>10</small>
            </li>
            <li>🧾 {movie.rating}</li>
          </ul>
          <p className="mt-4 text-center md:text-left">{movie.plot}</p>
          {movie?.languages?.length > 0 && (
            <ul className="languages mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 md:flex-row md:items-start">
              <span>Languages</span>
              {movie?.languages.map((l, idx) => (
                <li key={idx} className="rounded-lg border border-solid px-1.5">
                  {l?.name}
                </li>
              ))}
            </ul>
          )}
          {bookmarkButton()}
        </div>
        <div className="image-poster relative order-first place-self-center md:order-last">
          <Image src={movie.poster} width={290} height={400} alt="poster" />
        </div>
      </div>
      {relatedMovies?.length > 0 && (
        <div className="similar-movies mt-12 flex flex-col justify-center md:justify-start">
          <h6 className="mb-4 text-3xl font-bold">More like this</h6>
          <div className="related-movies">
            <section className="related-movies grid grid-cols-2 items-center gap-y-3 md:grid-cols-3 lg:grid-cols-6">
              <>
                {relatedMovies?.map((m) => (
                  <MovieCard movie={m} key={m.id} />
                ))}
              </>
            </section>
          </div>
        </div>
      )}
      <div className="comments mt-16">
        <h6 className="mb-4 text-3xl font-bold">Comments</h6>
        <div className="comments-list flex flex-col gap-y-4">
          <ShowIfElse
            if={movie?.comments?.length > 0}
            else={
              <h4 className="text-md font-normal">
                No comments yet. Be the first to comment!
              </h4>
            }
          >
            <>
              {movie?.comments?.map((comment, idx) => (
                <CommentCard
                  key={idx}
                  {...comment}
                  showChildComments
                  objectType="movie"
                  entityId={movie.id}
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
