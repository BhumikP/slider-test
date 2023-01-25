import { render, screen } from "@testing-library/react";
import { data } from "./dummyRes";
import SlideComponent from "./SlideComponent";

describe("SlideComponent Test", () => {
  test("No data Test", () => {
    render(<SlideComponent slideData={[]} />);
    const noDataText = screen.getByText(/No data available/i);
    expect(noDataText).toBeInTheDocument();
  });

  test("Testing with Data", () => {
    render(<SlideComponent slideData={data} />);
    const text = screen.getByText(
      /accusamus beatae ad facilis cum similique qui sunt/i
    );
    expect(text).toBeInTheDocument();
  });
});
