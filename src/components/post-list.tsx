import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Post } from "@prisma/client";
import dayjs from "dayjs";

export type PostListProps = {
  posts: readonly Post[];
};

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="grid gap-6">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Avatar className="w-12 h-12">
                <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                <AvatarFallback>-</AvatarFallback>
              </Avatar>
              <div>
                <div className="prose font-medium">{`${post.id}_${post.ipAddress}`}</div>
                <div className="prose text-xs text-muted-foreground">
                  {dayjs(post.createdAt).fromNow()}
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="prose whitespace-pre-wrap">{post.content}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
