import { ThreadContent } from "@/components/thread-content";

export type ThreadDetailPageProps = { params: { id: string } };

export default function ThreadDetailPage({
  params: { id },
}: ThreadDetailPageProps) {
  return <ThreadContent />;
}
