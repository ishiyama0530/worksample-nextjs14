import { ThreadsPresentation } from "@/app/(application)/threads/presentation";
import prisma from "@/lib/prisma";
import { unstable_cache } from "next/cache";

const getThreads = unstable_cache(
  () => prisma.thread.findMany({ orderBy: { createdAt: "desc" } }),
  [],
  { revalidate: 3600, tags: ["get-threads"] },
);

export default async function ThreadsPage() {
  const threads = await getThreads();
  return <ThreadsPresentation threads={threads} />;
}
