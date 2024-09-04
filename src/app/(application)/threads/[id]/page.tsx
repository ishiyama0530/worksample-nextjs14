import { ThreadDetailPresentation } from "@/app/(application)/threads/[id]/_presentation";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

export type ThreadDetailPageProps = { params: { id: string } };

const getThread = async (id: string) => prisma.thread.findFirst();

export default async function ThreadDetailPage({
  params: { id },
}: ThreadDetailPageProps) {
  const thread = await getThread(id);

  if (!thread) {
    return notFound();
  }

  return <ThreadDetailPresentation thread={thread} />;
}
