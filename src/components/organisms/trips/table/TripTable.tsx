import { Trip } from "src/types/Trip";
import TripTableHeader from "./TripTableHeader";
import TripTableLine from "./TripTableLine";

type TripTableProps = {
	trips: Trip[];
};

export default function TripTable(props: TripTableProps): JSX.Element {
	return (
		<table className="table-auto w-full text-center">
			<TripTableHeader />
			<tbody>
				{
					props.trips.map((trip) => (
						<TripTableLine trip={trip} />
					))
				}
			</tbody>
		</table>
	);
}