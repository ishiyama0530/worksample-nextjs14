import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Thread } from "@prisma/client";
import Link from "next/link";

export type ThreadListProps = {
  threads: readonly Thread[];
};

export function ThreadList({ threads }: ThreadListProps) {
  return (
    <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {threads.map((thread) => (
        <Card key={thread.id} className="h-52 flex flex-col">
          <CardHeader className="pb-2 max-h-20">
            <CardTitle className="prose text-sm line-clamp-2 break-words">
              {thread.title}
            </CardTitle>
          </CardHeader>
          {thread.description && (
            <CardContent className="pb-2 max-h-20">
              <p className="text-xs/relaxed prose line-clamp-3 break-words">
                {thread.description}
              </p>
            </CardContent>
          )}
          <CardFooter className="pb-4 flex items-end grow">
            <Link
              href={`/threads/${thread.id}`}
              className={cn(
                buttonVariants({
                  size: "sm",
                }),
                "w-full",
              )}
              prefetch={false}
            >
              View
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
