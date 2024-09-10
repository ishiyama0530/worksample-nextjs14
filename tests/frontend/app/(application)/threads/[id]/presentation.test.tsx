import { ThreadDetailPresentation } from "@/app/(application)/threads/[id]/presentation";
import type { Post, Thread } from "@prisma/client";
import { render } from "@testing-library/react";

jest.mock("@/components/comment-post-form", () => ({
  CommentPostForm: jest.fn(({ className, threadId }) => (
    <div data-testid="comment-post-form" className={className}>
      Mocked Comment Post Form for thread {threadId}
    </div>
  )),
}));

jest.mock("@/components/delete-dialog", () => ({
  DeleteDialog: jest.fn(({ children }) => (
    <div data-testid="delete-dialog">{children}</div>
  )),
}));

const mockThread: Thread = {
  id: "1",
  title: "スレッド1",
  description: "説明1",
  password: "password1",
  postKeyword: "keyword1",
  createdAt: new Date("2024-01-01"),
  updatedAt: new Date("2024-01-01"),
} as const;

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

describe("ThreadDetailPresentation", () => {
  test("スレッドの詳細が正しく表示されること", () => {
    const { getByText } = render(
      <ThreadDetailPresentation thread={mockThread} posts={posts} />,
    );

    expect(getByText("スレッド1")).toBeInTheDocument();
  });

  test("コメントリストが正しく表示されること", () => {
    const { getByText } = render(
      <ThreadDetailPresentation thread={mockThread} posts={posts} />,
    );

    expect(getByText("これはテストコメントです。")).toBeInTheDocument();
    expect(getByText("もう一つのテストコメントです。")).toBeInTheDocument();
  });

  test("コメント投稿フォームが表示されること", () => {
    const { getByTestId } = render(
      <ThreadDetailPresentation thread={mockThread} posts={posts} />,
    );

    expect(getByTestId("comment-post-form")).toHaveTextContent(
      "Mocked Comment Post Form for thread 1",
    );
  });
});
