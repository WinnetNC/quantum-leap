import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "./Hero";

const mockProps = {
  title: "Experience Tomorrow, Today",
  subtitle: "Quantum Leap redefines performance.",
  primaryCTA: {
    label: "Pre-Order Now",
    action: "preorder",
  },
  secondaryCTA: {
    label: "Watch Demo",
    action: "demo",
  },
};

describe("Hero Component", () => {
  test("renders hero title", () => {
    render(<Hero {...mockProps} />);
    expect(
      screen.getByText(/experience tomorrow, today/i)
    ).toBeInTheDocument();
  });

  test("renders subtitle", () => {
    render(<Hero {...mockProps} />);
    expect(
      screen.getByText(/quantum leap redefines performance/i)
    ).toBeInTheDocument();
  });

  test("renders primary CTA", () => {
    render(<Hero {...mockProps} />);
    expect(
      screen.getByRole("button", { name: /pre-order now/i })
    ).toBeInTheDocument();
  });

  test("renders secondary CTA", () => {
    render(<Hero {...mockProps} />);
    expect(
      screen.getByRole("button", { name: /watch demo/i })
    ).toBeInTheDocument();
  });
});