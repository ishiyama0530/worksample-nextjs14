import prisma from "@/lib/prisma";
import type { MetadataRoute } from "next";
import { unstable_cache } from "next/cache";

const getThreads = unstable_cache(
  () => prisma.thread.findMany({ orderBy: { createdAt: "desc" } }),
  [],
  { revalidate: 3600, tags: ["get-threads"] },
);

const concatUrl = (url: string) => `${process.env.ORIGIN_URL}/${url}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // データベースやAPIからページのデータを取得
  const threads = await getThreads();

  const threadUrls = threads.map((post) => ({
    url: concatUrl(`threads/${post.id}`),
    lastModified: post.updatedAt,
  }));

  const now = new Date();

  return [
    {
      url: origin,
      lastModified: now,
    },
    {
      url: concatUrl("about"),
      lastModified: now,
    },
    {
      url: concatUrl("contact"),
      lastModified: now,
    },
    {
      url: concatUrl("threads"),
      lastModified: now,
    },
    ...threadUrls,
  ];
}
