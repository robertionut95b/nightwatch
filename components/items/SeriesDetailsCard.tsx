import Image from 'next/image'
import DateComponent from "../date";
import Link from 'next/link';
import { Serie } from '../../generated/graphql';
import SeriesCard from './SeriesCard';
import SeasonCard from './SeasonCard';

export default function SeriesDetailsCard({ series, relatedSeries }: { series: Serie, relatedSeries: Serie[] }) {

    return (
        <div className="series-card-details">
            <div className="grid grid-cols-1 md:grid-cols-3 relative place-items-start gap-x-2">
                <div className="content-info flex flex-col items-center md:items-start gap-y-2 col-span-2">
                    <h6 className="mb-2 font-bold text-3xl">{series.title}</h6>
                    <h6 className="mb-4 font-bold text-1xl">TV Show - Series</h6>
                    <div className="genres mb-2">
                        {series?.genres &&
                            <ul className="flex items-center md:items-start md:flex-row gap-x-2 gap-y-2 flex-wrap">
                                {series?.genres.map((g, idx) =>
                                    <li key={idx} className="border border-solid rounded-lg px-1.5">
                                        <Link href={`/series?g=${g?.name}`}>
                                            {g?.name}
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        }
                    </div>
                    <ul className="flex flex-row items-center md:items-start gap-x-4 gap-y-2 flex-wrap">
                        <li>📅 {<DateComponent dateString={series.release} />}</li>
                        <li>🎥 {series.runtime} <small>minutes</small></li>
                        <li>⭐ {series.imdbRating}/<small>10</small></li>
                        <li>🧾 {series.rating}</li>
                    </ul>
                    <p className="mt-4 text-center md:text-left">{series.plot}</p>
                    <button className="mt-6 md:mt-12 btn-primary">Add to watchlist</button>
                </div>
                <div className="image-poster relative place-self-center order-first md:order-last">
                    <Image src={series.poster} width={300} height={400} />
                </div>
            </div>
            <div className="series-seasons flex flex-col justify-center md:justify-start mt-12">
                <h6 className="mb-4 font-bold text-3xl">
                    Seasons <small className='text-lg align-text-top'>{series.totalSeasons}</small>
                </h6>
                <div className="related-series">
                    <section className="max-w-max flex flex-row gap-x-12 gap-y-8 flex-wrap justify-center">
                        <>
                            {series.seasons.map(s => <SeasonCard season={s} key={s.id} />)}
                        </>
                    </section>
                </div>
            </div>
            {
                relatedSeries?.length > 0 &&
                <div className="similar-series flex flex-col justify-center md:justify-start mt-12">
                    <h6 className="mb-4 font-bold text-3xl">
                        More like this
                    </h6>
                    <div className="related-series">
                        <section className="max-w-max flex flex-row gap-x-12 gap-y-8 flex-wrap justify-center">
                            <>
                                {relatedSeries.map(s => <SeriesCard series={s} key={s.id} />)}
                            </>
                        </section>
                    </div>
                </div>
            }
        </div>
    )
}