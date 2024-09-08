"use server";

import { createThreadSchema } from "@/actions/createThread/schema";
import { getIpAddress } from "@/lib/ip";
import prisma from "@/lib/prisma";
import { parseWithZod } from "@conform-to/zod";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { ulid } from "ulid";

export async function createThread(_: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: createThreadSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const id = ulid().toLowerCase();
  await prisma.thread.create({
    data: {
      id,
      title: submission.value.title,
      description: submission.value.description,
      postKeyword: submission.value.postKeyword, // 暗号化
      password: submission.value.password,
      posts: {
        create: {
          id: ulid().toLowerCase(),
          content: submission.value.post,
          ipAddress: getIpAddress(),
        },
      },
    },
  });

  revalidateTag("get-threads");
  redirect(`/threads/${id}`);
}
