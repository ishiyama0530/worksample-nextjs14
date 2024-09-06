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
    <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {threads.map((thread) => (
        <Card key={thread.id}>
          <CardHeader>
            <CardTitle className="prose">{thread.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm/relaxed prose">{thread.description}</p>
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
  );
}
