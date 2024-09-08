import { ThreadsPresentation } from "@/app/(application)/threads/presentation";
import prisma from "@/lib/prisma";
import { unstable_cache } from "next/cache";

const limit = 10;

const getThreads = (page: number) =>
  unstable_cache(
    async () => {
      const skip = (page - 1) * limit;
      const result = await prisma.thread.findMany({
        orderBy: { id: "desc" },
        skip,
        take: limit + 1,
      });
      const hasNext = result.length > limit;
      return { threads: result.slice(0, limit), hasNext };
    },
    ["get-threads", `get-threads-${page}`],
    { revalidate: 3600, tags: ["get-threads", `get-threads-${page}`] },
  )();

export default async function ThreadsPage({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  const currentPage = Number(searchParams?.page) || 1;

  const { threads, hasNext } = await getThreads(currentPage);
  return (
    <ThreadsPresentation
      threads={threads}
      currentPage={currentPage}
      hasNext={hasNext}
    />
  );
}
