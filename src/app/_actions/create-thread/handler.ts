"use server";

import { createThreadScheme } from "@/app/_actions/create-thread/scheme";
import { getIpAddress } from "@/lib/ip";
import prisma from "@/lib/prisma";
import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";
import { ulid } from "ulid";

export async function createThread(_: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: createThreadScheme,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  await prisma.thread.create({
    data: {
      id: ulid(),
      title: submission.value.title,
      description: submission.value.description,
      keyPhrases: "keyPhrases",
      password: "password",
      posts: {
        create: {
          id: ulid(),
          content: submission.value.post,
          ipAddress: getIpAddress(),
        },
      },
    },
  });

  redirect("/threads");
}
