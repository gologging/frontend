import { Trip } from "src/types/Trip"

type TripLineProps = {
	trip: Trip;
};

export default function TripTableLine(props: TripLineProps): JSX.Element {
	return (
		<tr>
			<td>{props.trip.car}</td>
			<td>{props.trip.driver}</td>
			<td>{props.trip.start_milage}</td>
			<td>{props.trip.end_milage}</td>
			<td>{props.trip.end_milage-props.trip.start_milage}</td>
		</tr>
	);
}
