import { Skeleton } from "@/components/ui/skeleton";

export default function ThreadDetailLoading() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <div className="flex-1 py-12 md:py-20">
        <div className="mx-auto container max-w-4xl px-4 md:px-6">
          <Skeleton className="h-[36px] w-[80%] rounded-xl mt-2 mb-2" />
          <Skeleton className="h-[20px] w-[50%] rounded-xl mt-3 mb-10" />
          <Skeleton className="h-[125px] w-full rounded-xl my-8" />
          <Skeleton className="h-[300px] w-full rounded-xl my-8" />
          <Skeleton className="h-[300px] w-full rounded-xl my-8" />
        </div>
      </div>
    </div>
  );
}
