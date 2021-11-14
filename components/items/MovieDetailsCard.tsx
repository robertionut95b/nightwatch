import Image from 'next/image'
import DateComponent from "../date";
import MovieCard from "./MovieCard";
import Link from 'next/link';
import { Movie } from '../../generated/graphql';

export default function MovieDetailsCard({ movie }: { movie: Movie }) {

    return (
        <div className="movie-card-details">
            <div className="grid grid-cols-1 md:grid-cols-3 relative place-items-start gap-x-2">
                <div className="content-info flex flex-col items-center md:items-start gap-y-2 col-span-2">
                    <h6 className="mb-4 font-bold text-3xl">{movie.title}</h6>
                    <div className="genres mb-2">
                        {movie?.genres &&
                            <ul className="flex items-center md:items-start md:flex-row gap-x-2 gap-y-2 flex-wrap">
                                {movie?.genres.map((g, idx) =>
                                    <li key={idx} className="border border-solid rounded-lg px-1.5">
                                        <Link href={`/movies?g=${g?.name}`}>
                                            {g?.name}
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        }
                    </div>
                    <ul className="flex flex-row items-center md:items-start gap-x-4 gap-y-2 flex-wrap">
                        <li>📅 {<DateComponent dateString={movie.release} />}</li>
                        <li>🎥 {movie.runtime} <small>minutes</small></li>
                        <li>⭐ {movie.imdbRating}/<small>10</small></li>
                        <li>🧾 {movie.rating}</li>
                    </ul>
                    <p className="mt-4 text-center md:text-left">{movie.plot}</p>
                    <button className="mt-6 md:mt-12 btn-primary">Add to watchlist</button>
                </div>
                <div className="image-poster relative place-self-center order-first md:order-last">
                    <Image src={movie.poster} width={290} height={400} />
                </div>
            </div>
            {
                movie?.related?.length > 0 &&
                <div className="similar-movies flex flex-col justify-center md:justify-start mt-12">
                    <h6 className="mb-4 font-bold text-3xl">
                        More like this
                    </h6>
                    <div className="related-movies">
                        <section className="max-w-max flex flex-row gap-x-12 gap-y-8 flex-wrap justify-center">
                            <>
                                {movie.related.map(m => <MovieCard movie={m} key={m.id} />)}
                            </>
                        </section>
                    </div>
                </div>
            }
        </div>
    )
}