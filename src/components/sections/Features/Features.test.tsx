import { render, screen } from "@testing-library/react";
import Features from "./Features";
import { describe, test, expect } from "vitest";

describe("Features Section", () => {
  test("renders section title", () => {
    render(<Features title="Test Features" features={[]} />);
    expect(screen.getByText(/test features/i)).toBeInTheDocument();
  });

  test("renders features from JSON", () => {
    render(<Features title="Features" features={[]} />);
    expect(screen.getByText(/quantum processor/i)).toBeInTheDocument();
  });
});