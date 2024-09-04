"use server";

import { getIpAddress } from "@/lib/ip";
import prisma from "@/lib/prisma";
import { ulid } from "ulid";

export async function getThreads() {
  return prisma.thread.findMany();
}

export async function getThreadById(id: string) {
  return prisma.thread.findUnique({
    where: {
      id,
    },
  });
}

export async function createThread(
  title: string,
  description: string,
  password: string,
  keyPhrases: string,
  post: {
    content: string;
  },
) {
  return prisma.thread.create({
    data: {
      id: ulid(),
      title,
      description,
      password,
      keyPhrases,
      posts: {
        create: {
          id: ulid(),
          ipAddress: getIpAddress(),
          content: post.content,
        },
      },
    },
  });
}
