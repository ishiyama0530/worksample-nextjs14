import { ThreadDetailPresentation } from "@/app/(application)/threads/[id]/presentation";
import prisma from "@/lib/prisma";
import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";

export type ThreadDetailPageProps = { params: { id: string } };

const getThread = (id: string) =>
  unstable_cache(
    () =>
      prisma.thread.findFirst({
        where: {
          id,
        },
      }),
    [`thread-${id}`],
    { revalidate: 3600, tags: [`thread-${id}`] },
  )();

const getPosts = (threadId: string) =>
  unstable_cache(
    () =>
      prisma.post.findMany({
        where: { threadId },
        orderBy: { createdAt: "asc" },
      }),
    [`thread-${threadId}`],
    { revalidate: 3600, tags: [`thread-${threadId}`] },
  )();

export async function generateMetadata({
  params: { id },
}: ThreadDetailPageProps) {
  const thread = await getThread(id);
  return {
    title: thread?.title,
    description: thread?.description,
    openGraph: {
      title: thread?.title,
    },
  };
}

export default async function ThreadDetailPage({
  params: { id },
}: ThreadDetailPageProps) {
  const [thread, posts] = await Promise.all([getThread(id), getPosts(id)]);

  if (!thread || !posts) {
    return notFound();
  }

  return <ThreadDetailPresentation thread={thread} posts={posts} />;
}
