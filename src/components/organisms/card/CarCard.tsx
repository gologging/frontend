import { Car } from "src/types/Car";

type CarCardProps = {
	car: Car;
};

export default function CarCard(props: CarCardProps): JSX.Element {
	return (
		<div>
			<img src={props.car.image} alt={props.car.name} />
			<h2 className="text-center">{props.car.name}</h2>
		</div>
	);
}