import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {} from "@/components/ui/pagination";
import type { Thread } from "@prisma/client";
import Link from "next/link";

export type ThreadListProps = {
  threads: readonly Thread[];
};

export function ThreadList({ threads }: ThreadListProps) {
  return (
    <>
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Bulletin Board
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore the latest updates and discussions on our bulletin board.
          </p>
        </div>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {threads.map((thread) => (
          <Card key={thread.id}>
            <CardHeader>
              <CardTitle>{thread.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm/relaxed">{thread.description}</p>
            </CardContent>
            <CardFooter>
              <Link
                href={`/threads/${thread.id}`}
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                View Post
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
