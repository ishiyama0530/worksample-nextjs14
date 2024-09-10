import { ThreadOverview } from "@/components/thread-overview";
import { render } from "@testing-library/react";

describe("ThreadOverView", () => {
  it("タイトルが正しく表示される", () => {
    const { getByText } = render(<ThreadOverview />);
    expect(getByText("Public Threads")).toBeInTheDocument();
  });
});
