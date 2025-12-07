import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Icon } from "./Icon";

const TestIcon = (
  <svg
    data-testid="test-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <title>Test Icon</title>
    <circle cx="12" cy="12" r="10" />
  </svg>
);

describe("Icon", () => {
  it("renders the SVG element", () => {
    render(<Icon svg={TestIcon} />);
    expect(screen.getByTestId("test-icon")).toBeInTheDocument();
  });

  it("applies default size of 6 (24px)", () => {
    const { container } = render(<Icon svg={TestIcon} />);
    const iconWrapper = container.firstChild as HTMLElement;
    expect(iconWrapper).toHaveStyle({ "--_size": "6" });
  });

  it("applies custom size", () => {
    const { container } = render(<Icon svg={TestIcon} size={8} />);
    const iconWrapper = container.firstChild as HTMLElement;
    expect(iconWrapper).toHaveStyle({ "--_size": "8" });
  });

  it("applies primary color variant", () => {
    const { container } = render(<Icon svg={TestIcon} color="primary" />);
    const iconWrapper = container.firstChild as HTMLElement;
    expect(iconWrapper.className).toContain("primary");
  });

  it("applies secondary color variant", () => {
    const { container } = render(<Icon svg={TestIcon} color="secondary" />);
    const iconWrapper = container.firstChild as HTMLElement;
    expect(iconWrapper.className).toContain("secondary");
  });

  it("applies accent color variant", () => {
    const { container } = render(<Icon svg={TestIcon} color="accent" />);
    const iconWrapper = container.firstChild as HTMLElement;
    expect(iconWrapper.className).toContain("accent");
  });

  it("applies warning color variant", () => {
    const { container } = render(<Icon svg={TestIcon} color="warning" />);
    const iconWrapper = container.firstChild as HTMLElement;
    expect(iconWrapper.className).toContain("warning");
  });

  it("applies positive color variant", () => {
    const { container } = render(<Icon svg={TestIcon} color="positive" />);
    const iconWrapper = container.firstChild as HTMLElement;
    expect(iconWrapper.className).toContain("positive");
  });

  it("applies critical color variant", () => {
    const { container } = render(<Icon svg={TestIcon} color="critical" />);
    const iconWrapper = container.firstChild as HTMLElement;
    expect(iconWrapper.className).toContain("critical");
  });

  it("applies neutral color variant", () => {
    const { container } = render(<Icon svg={TestIcon} color="neutral" />);
    const iconWrapper = container.firstChild as HTMLElement;
    expect(iconWrapper.className).toContain("neutral");
  });

  it("applies additional className", () => {
    const { container } = render(
      <Icon svg={TestIcon} className="custom-class" />
    );
    const iconWrapper = container.firstChild as HTMLElement;
    expect(iconWrapper.className).toContain("custom-class");
  });

  it("applies additional inline styles", () => {
    const { container } = render(
      <Icon svg={TestIcon} style={{ marginTop: "10px" }} />
    );
    const iconWrapper = container.firstChild as HTMLElement;
    expect(iconWrapper).toHaveStyle({ marginTop: "10px" });
  });

  it("passes through additional HTML attributes", () => {
    const { container } = render(
      <Icon svg={TestIcon} data-custom="test-value" />
    );
    const iconWrapper = container.firstChild as HTMLElement;
    expect(iconWrapper).toHaveAttribute("data-custom", "test-value");
  });

  it("renders without color when no color prop is provided", () => {
    const { container } = render(<Icon svg={TestIcon} />);
    const iconWrapper = container.firstChild as HTMLElement;
    const classNames = iconWrapper.className.split(" ");
    const hasColorClass = classNames.some((className) =>
      [
        "primary",
        "secondary",
        "accent",
        "warning",
        "positive",
        "critical",
        "neutral",
      ].some((color) => className.includes(color))
    );
    expect(hasColorClass).toBe(false);
  });
});
