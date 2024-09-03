import { ThreadContent } from "@/components/thread-content";
import { PrismaClient } from "@prisma/client";

export type ThreadDetailPageProps = { params: { id: string } };

const getThread = async (id: string) => {
  try {
    const prisma = new PrismaClient();
    const thread = await prisma.thread.findFirst();

    return thread;
  } catch (e) {
    console.error(JSON.stringify(e, null, 2));
    return null;
  }
};

export default async function ThreadDetailPage({
  params: { id },
}: ThreadDetailPageProps) {
  const thread = await getThread(id);
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
