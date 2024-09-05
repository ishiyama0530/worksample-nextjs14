import { z } from "zod";

export const createThreadScheme = z.object({
  title: z.string().max(30),
  description: z.string().max(200),
  post: z.string().max(1000),
});

export type CreateThreadData = z.infer<typeof createThreadScheme>;
