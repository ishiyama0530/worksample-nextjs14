"use server";

import {
  type CreateThreadData,
  createThreadScheme,
} from "@/app/_actions/create-thread/scheme";
import { type FieldErrors, safeParse } from "@/lib/validation";

export type FormState = CreateThreadData & {
  // title: string;
  // description: string;
  // password: string;
  // keyPhrases: string;
  // post: {
  //   content: string;
  // };
};

export async function createThread(
  prevState: FormState,
  formData: FormData,
): Promise<FormState & { errors?: FieldErrors }> {
  const result = safeParse(createThreadScheme, formData);
  if (!result.ok) {
    return {
      ...prevState,
      errors: result.errors,
    };
  }
  // return prisma.thread.create({
  //   data: {
  //     id: ulid(),
  //     title,
  //     description,
  //     password,
  //     keyPhrases,
  //     posts: {
  //       create: {
  //         id: ulid(),
  //         ipAddress: getIpAddress(),
  //         content: post.content,
  //       },
  //     },
  //   },
  // });

  // 2秒待つ
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return { title: "bbb" };
}
