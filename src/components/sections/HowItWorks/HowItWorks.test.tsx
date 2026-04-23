import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect } from "vitest";
import HowItWorks from "./HowItWorks";

const mockSteps = [
  { id: "1", title: "Initialize", description: "Power up and sync instantly." },
  { id: "2", title: "Adapt", description: "AI learns your behavior." },
];

test("renders steps and switches on click", () => {
  render(<HowItWorks title="How It Works" steps={mockSteps} />);

  // initial state
  expect(screen.getByRole("button", { name: "Initialize" })).toBeInTheDocument();
  expect(screen.getByText("Power up and sync instantly.")).toBeInTheDocument();

  // click second step
  fireEvent.click(screen.getByRole("button", { name: "Adapt" })); 

  // updated state
  expect(screen.getByText("AI learns your behavior.")).toBeInTheDocument();
});