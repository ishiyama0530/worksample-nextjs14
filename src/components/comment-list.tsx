import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Post } from "@prisma/client";
import dayjs from "dayjs";
import { User2 } from "lucide-react";

export type CommentListProps = {
  posts: readonly Post[];
};

export const CommentList: React.FC<CommentListProps> = ({ posts }) => {
  return (
    <div className="flex flex-col gap-2">
      {posts.map((post) => (
        <Card key={post.id} className="rounded-none sm:rounded-lg">
          <CardHeader className="py-4 px-2 md:px-4">
            <div className="flex items-center gap-1">
              <Avatar className="w-10 h-10 grid place-content-center">
                <User2 className="h-7 w-7" />
              </Avatar>
              <div>
                <p className="prose text-sm">{`***${post.id.slice(-6, -1)}**@${post.ipAddress}`}</p>
                <p className="prose text-xs text-muted-foreground mt-1">
                  {dayjs(post.createdAt).fromNow()}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="prose-sm max-w-fit whitespace-pre-wrap break-words">
              {post.content}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
