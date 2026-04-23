import { render, screen } from "@testing-library/react";
import Features from "./Features";
import { describe, test, expect } from "vitest";

const mockFeatures = [
  {
    id: "1",
    title: "Test Feature",
    description: "Test Description",
    icon: "⚡",
  },
];

describe("Features Section", () => {
  test("renders title", () => {
    render(<Features title="Features" features={mockFeatures} />);
    expect(screen.getByText(/features/i)).toBeInTheDocument();
  });

  test("renders feature items", () => {
    render(<Features title="Features" features={mockFeatures} />);
    expect(screen.getByText(/test feature/i)).toBeInTheDocument();
  });
});