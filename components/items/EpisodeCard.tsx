import { Episode } from '../../generated/graphql';
import Image from 'next/image';
import Link from 'next/link';
import { Ribbon } from '../utils/ribbon';
import { Placeholder } from '../utils/placeholder';

export default function EpisodeCard({
  seriesImdbID,
  episode,
}: {
  seriesImdbID: string;
  episode: Episode;
}): JSX.Element {
  return (
    <div className="episode-card w-max">
      <div className="series-card cursor-pointer">
        <div className="flex flex-col mx-auto relative w-[180px]">
          <Link
            href={`/series/${seriesImdbID}/episode/${episode.imdbID}`}
            passHref
          >
            {episode.poster ? (
              <a>
                <Image
                  src={episode.poster}
                  width={180}
                  height={250}
                  alt="poster"
                  objectFit="cover"
                />
              </a>
            ) : (
              <Link
                href={`/series/${seriesImdbID}/episode/${episode.imdbID}`}
                passHref
              >
                <a>
                  <Placeholder width={180} height={250} label="No poster" />
                </a>
              </Link>
            )}
          </Link>
          <h6
            className="text-center mt-1 truncate font-medium tracking-wide"
            title={episode.title}
          >
            {episode.title}
          </h6>
          <Ribbon />
        </div>
      </div>
    </div>
  );
}
