import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import FAQ from "./FAQ";

const mockFAQ = [
  { question: "Q1", answer: "A1" },
  { question: "Q2", answer: "A2" },
];

describe("FAQ", () => {
  test("toggles FAQ items", () => {
    render(<FAQ title="FAQ" items={mockFAQ} />);

  fireEvent.click(screen.getByText("Q1"));

    expect(screen.getByText("A1")).toBeInTheDocument();
  });
});