import { z } from "zod";

export const createThreadScheme = z.object({
  title: z.string().max(5),
});

export type CreateThreadData = z.infer<typeof createThreadScheme>;
