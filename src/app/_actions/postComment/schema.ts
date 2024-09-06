import { z } from "zod";

export const postCommentSchema = z.object({
  threadId: z.string().min(1).max(26),
  content: z.string().max(1000),
});

export type PostCommentData = z.infer<typeof postCommentSchema>;
