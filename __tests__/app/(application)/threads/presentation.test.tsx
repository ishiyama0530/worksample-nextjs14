import { ThreadOverview } from "@/components/thread-overview";
import { render, screen } from "@testing-library/react";

describe("ThreadsPresentation", () => {
  it("renders a heading", () => {
    const now = new Date();
    render(
      // <ThreadsPresentation
      //   currentPage={3}
      //   hasNext={true}
      //   threads={[
      //     {
      //       id: "1",
      //       title: "MyTitle",
      //       description: "MyDescription",
      //       password: "MyPassword",
      //       postKeyword: "MyPostKeywords",
      //       createdAt: now,
      //       updatedAt: now,
      //     },
      //   ]}
      // />,
      <ThreadOverview />,
    );

    const pageTitle = screen.getByText("Public Threads");

    expect(pageTitle).toBeInTheDocument();
  });
});
