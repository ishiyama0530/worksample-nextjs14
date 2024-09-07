"use server";

import { deleteThreadSchema } from "@/actions/deleteThread/schema";
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

  if (thread.password !== submission.value.password) {
    return submission.reply({
      fieldErrors: {
        password: ["削除用パスワードが一致しません"],
      },
    });
  }

  await prisma.thread.delete({
    where: {
      id: submission.value.id,
      password: submission.value.password,
    },
  });

  revalidateTag(`thread-${submission.value.id}`);
  revalidateTag("get-threads");
  redirect("/threads");
}
