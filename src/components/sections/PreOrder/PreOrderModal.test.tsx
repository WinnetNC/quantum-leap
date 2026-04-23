import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import PreOrderModal from "./PreOrderModal";

describe("PreOrderModal", () => {
  test("validates email", () => {
    render(<PreOrderModal isOpen={true} onClose={() => {}} />);

    fireEvent.click(screen.getByText(/confirm pre-order/i));

    expect(screen.getByText(/valid email/i)).toBeInTheDocument();
  });

  test("submits valid form", () => {
    render(<PreOrderModal isOpen={true} onClose={() => {}} />);

    fireEvent.change(screen.getByPlaceholderText(/email/i), {
      target: { value: "test@test.com" },
    });

    fireEvent.click(screen.getByText(/confirm pre-order/i));

    expect(localStorage.getItem("preorder")).not.toBeNull();
  });
});