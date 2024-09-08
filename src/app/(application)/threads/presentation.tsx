import { ThreadCreateForm } from "@/components/thread-create-form";
import { ThreadList } from "@/components/thread-list";
import { ThreadOverview } from "@/components/thread-overview";
import ThreadPagination from "@/components/threads-pagination";
import type { Thread } from "@prisma/client";

export type ThreadsPresentationProps = {
  threads: readonly Thread[];
  currentPage: number;
  hasNext: boolean;
};

export function ThreadsPresentation({
  threads,
  currentPage,
  hasNext,
}: ThreadsPresentationProps) {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <div className="flex-1 bg-muted py-12">
        <div className="mx-auto container px-4 md:px-6">
          <ThreadOverview />
          <ThreadList threads={threads} />
          <ThreadPagination
            currentPage={currentPage}
            hasNext={hasNext}
            className="mt-12 flex justify-center"
          />
          <ThreadCreateForm className="mt-12 bg-background rounded-lg p-6 max-w-4xl mx-auto" />
        </div>
      </div>
    </div>
  );
}
