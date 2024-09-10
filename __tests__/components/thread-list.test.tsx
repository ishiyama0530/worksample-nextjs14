import { ThreadList } from "@/components/thread-list";
import type { Thread } from "@prisma/client";
import { render } from "@testing-library/react";

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

describe("ThreadList", () => {
  it("全てのスレッドが正しく表示される", () => {
    const { getAllByRole } = render(<ThreadList threads={mockThreads} />);

    const threadItems = getAllByRole("heading", { level: 3 });
    expect(threadItems).toHaveLength(2);
    expect(threadItems[0]).toHaveTextContent("スレッド1");
    expect(threadItems[1]).toHaveTextContent("スレッド2");
  });

  it("スレッドの説明が正しく表示される", () => {
    const { getAllByText } = render(<ThreadList threads={mockThreads} />);

    const descriptions = getAllByText(/説明/);
    expect(descriptions).toHaveLength(2);
    expect(descriptions[0]).toHaveTextContent("説明1");
    expect(descriptions[1]).toHaveTextContent("説明2");
  });

  it("スレッドがない場合、何も表示されない", () => {
    const { queryByRole } = render(<ThreadList threads={[]} />);

    expect(queryByRole("heading", { level: 2 })).not.toBeInTheDocument();
  });

  it("リンクが正しく設定されている", () => {
    const { getAllByRole } = render(<ThreadList threads={mockThreads} />);

    const links = getAllByRole("link");
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveAttribute("href", "/threads/1");
    expect(links[1]).toHaveAttribute("href", "/threads/2");
  });
});
