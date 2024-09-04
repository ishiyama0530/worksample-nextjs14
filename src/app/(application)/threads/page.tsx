import { ThreadsPresentation } from "@/app/(application)/threads/_presentation";
import prisma from "@/lib/prisma";

const getThreads = () => prisma.thread.findMany();

export default async function ThreadsPage() {
  const threads = await getThreads();
  return <ThreadsPresentation threads={threads} />;
}
