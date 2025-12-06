import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ExampleButton } from "./ExampleButton";

describe("ExampleButton", () => {
  it("renders children correctly", () => {
    render(<ExampleButton>Click me</ExampleButton>);
    expect(screen.getByRole("button")).toHaveTextContent("Click me");
  });

  it("applies the primary variant by default", () => {
    render(<ExampleButton>Primary</ExampleButton>);
    const button = screen.getByRole("button");
    expect(button.className).toContain("primary");
  });

  it("applies the secondary variant when specified", () => {
    render(<ExampleButton variant="secondary">Secondary</ExampleButton>);
    const button = screen.getByRole("button");
    expect(button.className).toContain("secondary");
  });

  it("applies the outline variant when specified", () => {
    render(<ExampleButton variant="outline">Outline</ExampleButton>);
    const button = screen.getByRole("button");
    expect(button.className).toContain("outline");
  });

  it("applies the medium size by default", () => {
    render(<ExampleButton>Medium</ExampleButton>);
    const button = screen.getByRole("button");
    expect(button.className).toContain("medium");
  });

  it("applies the small size when specified", () => {
    render(<ExampleButton size="small">Small</ExampleButton>);
    const button = screen.getByRole("button");
    expect(button.className).toContain("small");
  });

  it("applies the large size when specified", () => {
    render(<ExampleButton size="large">Large</ExampleButton>);
    const button = screen.getByRole("button");
    expect(button.className).toContain("large");
  });

  it("is disabled when disabled prop is true", () => {
    render(<ExampleButton disabled>Disabled</ExampleButton>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<ExampleButton onClick={handleClick}>Click me</ExampleButton>);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    const handleClick = vi.fn();
    render(
      <ExampleButton disabled onClick={handleClick}>
        Disabled
      </ExampleButton>
    );
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("applies additional className", () => {
    render(<ExampleButton className="custom-class">Custom</ExampleButton>);
    const button = screen.getByRole("button");
    expect(button.className).toContain("custom-class");
  });
});
