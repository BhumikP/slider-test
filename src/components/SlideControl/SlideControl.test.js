import { render, screen } from "@testing-library/react";
import SlideControl from "./SlideControl";

describe("SlideControl Test", () => {
  test("Previous,Restart Button Disable on first slide", () => {
    render(<SlideControl currentIndex={0} />);
    const prevButton = screen.getByText("Previous");
    const restartButton = screen.getByText("Restart");
    expect(prevButton).toHaveAttribute("disabled");
    expect(restartButton).toHaveAttribute("disabled");
  });

  test("Next Button Disable on last slide", () => {
    render(<SlideControl currentIndex={4} endIndex={4} />);
    const nextButton = screen.getByText("Next");

    expect(nextButton).toHaveAttribute("disabled");
  });
});
