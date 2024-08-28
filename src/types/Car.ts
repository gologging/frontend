
import z from 'zod';

export const carScheme = z.object({
	id: z.string(),
	name: z.string(),
	image: z.string(),
});

export type Car = z.infer<typeof carScheme>;
