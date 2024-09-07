import { CommentPostForm } from "@/components/comment-post-form";
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
    <div className="flex flex-col min-h-[100dvh]">
      <div className="flex-1 bg-muted py-12 md:py-20">
        <div className="mx-auto container max-w-4xl px-4 md:px-6">
          <ThreadDetailOverview
            title={thread.title}
            description={thread.description}
            threadId={thread.id}
          />
          <PostList posts={posts} />
          <CommentPostForm className="mt-8" threadId={thread.id} />
        </div>
      </div>
    </div>
  );
};
