import { Season } from '../../generated/graphql';

export default function SeasonDetailsCard({ season }: { season: Season }) {

    return (
        <div className="series-card-details">
            <div className="grid grid-cols-1 md:grid-cols-3 relative place-items-start">
                <h6 className="mb-2 font-bold text-xl">{season.title}</h6>
            </div>
        </div>
    )
}