import TripTable from "components/organisms/trips/table/TripTable";
import TripTableHeader from "components/organisms/trips/table/TripTableHeader";
import TripTableLine from "components/organisms/trips/table/TripTableLine";
import { getLatestCars } from "components/service/CarService";
import { getLatestTrips } from "components/service/TripService";
import { useEffect, useState } from "react";
import { Car } from "src/types/Car";
import { Trip } from "src/types/Trip";

export default function HomePage() {

	const [latestCars, setLatestCars] = useState<Car[]>([]);
	const [latestTrips, setLatestTrips] = useState<Trip[]>([]);

	useEffect(() => {
		getLatestCars().then((cars) => setLatestCars(cars));
		getLatestTrips().then((trips) => setLatestTrips(trips));
	});

	return (
		<div>
			<header className="flex md:hidden justify-between py-4 px-6">
				<div>
					<h1>Welcome Mikkel</h1>
				</div>
				<div>
					User
				</div>
			</header>
			<main className="m-4">
				<div>
					<h1>Latest cars</h1>
					<div className="m-2 grid grid-cols-3 md:grid-cols-6 gap-6">
						{
							latestCars.map((car) => (
								<div key={car.id}>
									<img src={car.image} alt={car.name} />
									<h2 className="text-center">{car.name}</h2>
								</div>
							))
						}
					</div>
				</div>
				<hr className="my-8" />
				<div>
					<h1>Latest drives</h1>
					<TripTable trips={latestTrips} />
				</div>
			</main>
		</div>
	);
}


