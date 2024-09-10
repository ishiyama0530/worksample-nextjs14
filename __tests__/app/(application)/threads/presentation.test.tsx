import { ThreadsPresentation } from "@/app/(application)/threads/presentation";
import type { Thread } from "@prisma/client";
import { render } from "@testing-library/react";

jest.mock("@/components/thread-create-form", () => ({
  ThreadCreateForm: jest.fn(({ className }) => (
    <div data-testid="thread-create-form" className={className}>
      Mocked Thread Create Form
    </div>
  )),
}));

const mockThreads: Thread[] = [
  {
    id: "1",
    title: "スレッド1",
    description: "説明1",
    password: "password1",
    postKeyword: "keyword1",
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
  {
    id: "2",
    title: "スレッド2",
    description: "説明2",
    password: "password2",
    postKeyword: "keyword2",
    createdAt: new Date("2024-01-02"),
    updatedAt: new Date("2025-01-02"),
  },
] as const;

describe("ThreadsPresentation", () => {
  test("スレッドリストが正しく表示されること", () => {
    const { getByText } = render(
      <ThreadsPresentation
        threads={mockThreads}
        currentPage={1}
        hasNext={true}
      />,
    );

    expect(getByText("スレッド1")).toBeInTheDocument();
    expect(getByText("スレッド2")).toBeInTheDocument();
  });

  test("ページネーションが正しく表示されること", () => {
    const { getByText } = render(
      <ThreadsPresentation
        threads={mockThreads}
        currentPage={1}
        hasNext={true}
      />,
    );

    expect(getByText("Previous")).toBeInTheDocument();
    expect(getByText("Next")).toBeInTheDocument();
  });

  test("スレッド作成フォームが表示されること", () => {
    const { getByTestId } = render(
      <ThreadsPresentation
        threads={mockThreads}
        currentPage={1}
        hasNext={true}
      />,
    );

    expect(getByTestId("thread-create-form")).toContainHTML(
      "Mocked Thread Create Form",
    );
  });
});
