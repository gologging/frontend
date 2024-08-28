import { z } from "zod";

export const tripScheme = z.object({
	id: z.string(),
	created_at: z.string(),
	updated_at: z.string(),
	car: z.string(),
	driver: z.string(),
	start_milage: z.number(),
	end_milage: z.number(),
	note: z.string(),
});

export type Trip = z.infer<typeof tripScheme>;
