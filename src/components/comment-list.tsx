import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Post } from "@prisma/client";
import dayjs from "dayjs";

export type CommentListProps = {
  posts: readonly Post[];
};

export const CommentList: React.FC<CommentListProps> = ({ posts }) => {
  return (
    <div className="grid gap-6">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader className="py-4">
            <div className="flex items-center gap-2">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                <AvatarFallback>-</AvatarFallback>
              </Avatar>
              <div>
                <p className="prose text-sm">{`${post.id}_${post.ipAddress}`}</p>
                <p className="prose text-xs text-muted-foreground mt-1">
                  {dayjs(post.createdAt).fromNow()}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="prose-sm max-w-fit whitespace-pre-wrap">
              {post.content}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
