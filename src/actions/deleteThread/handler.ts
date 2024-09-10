"use server";

import { deleteThreadSchema } from "@/actions/deleteThread/schema";
import { verify } from "@/lib/hash";
import prisma from "@/lib/prisma";
import { parseWithZod } from "@conform-to/zod";
import { revalidateTag } from "next/cache";
import { notFound, redirect } from "next/navigation";

export async function deleteThread(_: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: deleteThreadSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const thread = await prisma.thread.findUnique({
    where: {
      id: submission.value.id,
    },
  });

  if (!thread) {
    notFound();
  }

  const ok = await verify(submission.value.password, thread.password);
  if (!ok) {
    return submission.reply({
      fieldErrors: {
        password: ["削除用パスワードが一致しません"],
      },
    });
  }

  await prisma.thread.delete({
    where: {
      id: submission.value.id,
    },
  });

  revalidateTag(`thread-${submission.value.id}`);
  revalidateTag("get-threads");
  redirect("/threads");
}
