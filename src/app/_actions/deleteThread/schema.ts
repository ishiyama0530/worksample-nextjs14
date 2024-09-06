import { z } from "zod";

export const deleteThreadSchema = z.object({
  id: z.string().min(1).max(26),
  password: z.string().min(1),
});

export type DeleteThreadData = z.infer<typeof deleteThreadSchema>;
