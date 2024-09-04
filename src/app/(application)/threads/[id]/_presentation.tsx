import { ThreadContent } from "@/components/thread-content";
import type { Thread } from "@prisma/client";

export type ThreadDetailPresentationProps = {
  thread: Thread;
};

export const ThreadDetailPresentation: React.FC<
  ThreadDetailPresentationProps
> = ({ thread }) => {
  return (
    <>
      <ul className="text-center p-8">
        <li>{thread.id}</li>
        <li>{thread.title}</li>
        <li>{thread.description}</li>
      </ul>
      <ThreadContent />;
    </>
  );
};
