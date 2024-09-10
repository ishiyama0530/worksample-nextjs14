import {
  ThreadDetailOverview,
  type ThreadDetailOverviewProps,
} from "@/components/thread-detail-overview";
import { render } from "@testing-library/react";

jest.mock("@/components/delete-dialog", () => ({
  DeleteDialog: jest.fn(({ children }) => (
    <div data-testid="delete-dialog">{children}</div>
  )),
}));

const mockProps: ThreadDetailOverviewProps = {
  threadId: "1",
  title: "Sample Thread",
  description: "This is a sample description",
} as const;

describe("ThreadDetailOverview", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("タイトルと説明が正しく表示される", () => {
    const { getByText } = render(<ThreadDetailOverview {...mockProps} />);

    expect(getByText("Sample Thread")).toBeInTheDocument();
    expect(getByText("This is a sample description")).toBeInTheDocument();
  });

  it("説明がnullの場合、説明が表示されない", () => {
    const { getByText, queryByText } = render(
      <ThreadDetailOverview {...mockProps} description={null} />,
    );

    expect(getByText("Sample Thread")).toBeInTheDocument();
    expect(queryByText("This is a sample description")).not.toBeInTheDocument();
  });

  it("DeleteDialogコンポーネントが正しくレンダリングされる", () => {
    const { getByTestId } = render(<ThreadDetailOverview {...mockProps} />);

    expect(getByTestId("delete-dialog")).toBeInTheDocument();
  });

  it("削除ボタンが正しく表示される", () => {
    const { getByRole, getByTestId } = render(
      <ThreadDetailOverview {...mockProps} />,
    );

    const button = getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("rounded-full hover:bg-white");
    expect(getByTestId("delete-dialog")).toContainElement(button);
  });

  it("Trashアイコンが正しく表示される", () => {
    const { getByTestId } = render(<ThreadDetailOverview {...mockProps} />);

    const trashIcon = getByTestId("delete-dialog").querySelector("svg");
    expect(trashIcon).toBeInTheDocument();
    expect(trashIcon).toHaveClass("h-4 w-4");
  });
});
