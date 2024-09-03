import { ThreadContent } from "@/components/thread-content";
import { PrismaClient } from "@prisma/client";

export type ThreadDetailPageProps = { params: { id: string } };

export default async function ThreadDetailPage({
  params: { id },
}: ThreadDetailPageProps) {
  const prisma = new PrismaClient();
  const thread = await prisma.thread.findFirst();

  return (
    <>
      <ul className="text-center p-8">
        <li>{thread?.id}</li>
        <li>{thread?.title}</li>
        <li>{thread?.description}</li>
      </ul>
      <ThreadContent />;
    </>
  );
}
