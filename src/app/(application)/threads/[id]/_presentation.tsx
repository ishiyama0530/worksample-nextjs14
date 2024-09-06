import Pagination from "@/components/pagination";
import { PostForm } from "@/components/post-form";
import { PostList } from "@/components/post-list";
import { ThreadDetailOverview } from "@/components/thread-detail-overview";
import type { Post, Thread } from "@prisma/client";

export type ThreadDetailPresentationProps = {
  thread: Thread;
  posts: readonly Post[];
};

export const ThreadDetailPresentation: React.FC<
  ThreadDetailPresentationProps
> = ({ thread, posts }) => {
  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto px-4 md:px-6 py-8">
      <ThreadDetailOverview
        title={thread.title}
        description={thread.description}
        threadId={thread.id}
      />
      <PostList posts={posts} />
      <Pagination className="mt-8" />
      <PostForm className="mt-8" threadId={thread.id} />
    </div>
  );
};
