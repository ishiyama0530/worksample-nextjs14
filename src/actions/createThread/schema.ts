import { z } from "zod";

export const createThreadSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().min(1).max(200).nullish(),
  post: z.string().min(1).max(1000),
  password: z.string().min(1).max(128),
  postKeyword: z.string().min(1).max(128),
});

export type CreateThreadData = z.infer<typeof createThreadSchema>;
