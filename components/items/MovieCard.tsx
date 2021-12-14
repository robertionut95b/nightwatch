import Link from 'next/link';
import Image from 'next/image';
import { Movie, SearchMovieByTitleQuery } from '../../generated/graphql';
import { Ribbon } from '../utils/ribbon';

export default function MovieCard({ movie }: { movie: Movie | SearchMovieByTitleQuery['movies'][0] }) {

  return (
        <div className="movie-card cursor-pointer">

            <div className="flex flex-col mx-auto relative w-[180px]">
                <Link href={`/movies/${movie.imdbID}`} >
                    <a>
                        <Image src={movie.poster} width={180} height={250} alt="poster" objectFit='cover' />
                    </a>
                </Link>
              <h6 className="text-center mt-1 truncate font-medium tracking-wide" title={movie.title}>{movie.title}</h6>
                <Ribbon />
            </div>
        </div>
  );
}