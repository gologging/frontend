import { Trip } from "src/types/Trip";

export async function getLatestTrips(): Promise<Trip[]> {
	return [
		{
			id: '1',
			created_at: '2021-01-01',
			updated_at: '2021-01-01',
			car: 'Car 1',
			driver: 'Driver 1',
			start_milage: 100,
			end_milage: 200,
			note: 'Note 1',
		},
		{
			id: '2',
			created_at: '2021-01-02',
			updated_at: '2021-01-02',
			car: 'Car 2',
			driver: 'Driver 2',
			start_milage: 200,
			end_milage: 300,
			note: 'Note 2',
		},
		{
			id: '3',
			created_at: '2021-01-03',
			updated_at: '2021-01-03',
			car: 'Car 3',
			driver: 'Driver 3',
			start_milage: 300,
			end_milage: 400,
			note: 'Note 3',
		},
	];
}