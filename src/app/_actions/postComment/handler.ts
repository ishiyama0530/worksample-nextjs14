"use server";

import { postCommentSchema } from "@/app/_actions/postComment/schema";
import { getIpAddress } from "@/lib/ip";
import prisma from "@/lib/prisma";
import { parseWithZod } from "@conform-to/zod";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { ulid } from "ulid";

export async function postComment(_: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: postCommentSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  await prisma.post.create({
    data: {
      id: ulid(),
      content: submission.value.content,
      ipAddress: getIpAddress(),
      threadId: submission.value.threadId,
    },
  });

  revalidateTag(`thread-${submission.value.threadId}`);
  redirect(`/threads/${submission.value.threadId}`);
}
