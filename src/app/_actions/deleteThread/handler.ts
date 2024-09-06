"use server";

import { deleteThreadSchema } from "@/app/_actions/deleteThread/schema";
import prisma from "@/lib/prisma";
import { parseWithZod } from "@conform-to/zod";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteThread(_: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: deleteThreadSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const thread = await prisma.thread.findFirst({
    where: {
      id: submission.value.id,
      password: submission.value.password,
    },
  });

  if (!thread) {
    return submission.reply({
      fieldErrors: {
        password: ["Invalid password"],
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
