import Link from 'next/link';
import Image from 'next/image';
import { Serie, SearchSeriesByTitleQuery, AllSeriesQuery } from '../../generated/graphql';
import { Ribbon } from '../utils/ribbon';

export default function SeriesCard({ series }: { series: Serie | AllSeriesQuery['series'][0] | SearchSeriesByTitleQuery['series'][0] }) {

  return (
        <div className="series-card cursor-pointer">
            <div className="flex flex-col mx-auto relative w-[180px]">
                <Link href={`/series/${series.imdbID}`} >
                    <a>
                        <Image src={series.poster} width={180} height={250} alt="poster" objectFit='cover' />
                    </a>
                </Link>
                <h6 className="text-center mt-1 truncate font-medium tracking-wide" title={series.title}>{series.title}</h6>
                < Ribbon />
            </div>
        </div>
  );
}