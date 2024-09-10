import { CommentList } from "@/components/comment-list";
import type { Post } from "@prisma/client";
import { render } from "@testing-library/react";

const posts: Post[] = [
  {
    id: "01J7D46BVAB1XM6R81639ZMVA5",
    threadId: "1",
    content: "これはテストコメントです。",
    createdAt: new Date(),
    ipAddress: "127.0.0.1",
  },
  {
    id: "01J7D46R46YEMZS2JZT3RWQHYD",
    threadId: "1",
    content: "もう一つのテストコメントです。",
    createdAt: new Date(),
    ipAddress: "192.168.0.1",
  },
] as const;

describe("CommentList", () => {
  test("全てのコメントが正しく表示される", () => {
    const { getByText, getAllByText } = render(<CommentList posts={posts} />);

    for (const post of posts) {
      expect(getByText(post.content)).toBeInTheDocument();
      expect(getByText(new RegExp(post.ipAddress))).toBeInTheDocument();
    }
  });

  test.skip("スレッド作成時には必ず最初のコメントも合わせてポストするので、コメントがない場合は考慮しない", () => {});
});
