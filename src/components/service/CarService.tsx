import { Car } from "src/types/Car";

export async function getLatestCars(): Promise<Car[]> {
	return [
		{
			id: '1',
			name: 'Car 1',
			image: 'https://via.placeholder.com/150',
		},
		{
			id: '2',
			name: 'Car 2',
			image: 'https://via.placeholder.com/150',
		},
		{
			id: '3',
			name: 'Car 3',
			image: 'https://via.placeholder.com/150',
		},
	];
}