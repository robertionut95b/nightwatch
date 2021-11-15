import Link from 'next/link';
import Image from 'next/image'
import { CreateSerieSearchMutation, Serie } from '../../generated/graphql';

export default function SeriesCard({ series }: { series: Serie | CreateSerieSearchMutation['createSerie'] }) {

    return (
        <div className="series-card cursor-pointer">

            <div className="flex flex-col relative w-[180px]">
                <Link href={`/series/${series.id}`} >
                    <a>
                        <Image src={series.poster} width={180} height={250} />
                    </a>
                </Link>
                <h6 className="text-center mt-1 truncate" title={series.title}>{series.title}</h6>
                <div className="bookmark group">
                    <svg className="absolute top-0 right-2 ipc-watchlist-ribbon__bg" width="26px" height="34px" viewBox="0 0 26 34" xmlns="http://www.w3.org/2000/svg" role="presentation">
                        <polygon className="ipc-watchlist-ribbon__bg-ribbon" fill="#000" points="26 0 0 0 0 32 12.2636611 26.2926049 26 31.7728343">
                        </polygon>
                    </svg>
                    <span className="absolute -top-1 right-3.5 text-lg group-hover:text-primary font-semibold transition-all ease-in-out duration-300">
                        +
                    </span>
                </div>
            </div>

        </div>
    )
}