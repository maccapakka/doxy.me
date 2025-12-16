import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Button } from "./Button";

// Mock icon element for testing
const MockIcon = (
  <svg data-testid="mock-icon">
    <title>Mock Icon</title>
  </svg>
);

describe("Button", () => {
  describe("rendering", () => {
    it("renders children correctly", () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole("button")).toHaveTextContent("Click me");
    });

    it("renders icon when provided", () => {
      render(<Button icon={MockIcon}>With Icon</Button>);
      expect(screen.getByTestId("mock-icon")).toBeInTheDocument();
    });

    it("applies icon className for sizing", () => {
      render(<Button icon={MockIcon}>With Icon</Button>);
      const icon = screen.getByTestId("mock-icon");
      // CSS module classes are hashed, just verify className is applied
      expect(icon).toHaveAttribute("class");
    });

    it("has type button", () => {
      render(<Button>Button</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("type", "button");
    });
  });

  describe("colors", () => {
    it("applies the action color by default", () => {
      render(<Button>Action</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toContain("action");
    });

    it("applies the positive color when specified", () => {
      render(<Button color="positive">Positive</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toContain("positive");
    });

    it("applies the critical color when specified", () => {
      render(<Button color="critical">Critical</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toContain("critical");
    });

    it("applies the neutral color when specified", () => {
      render(<Button color="neutral">Neutral</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toContain("neutral");
    });

    it("applies the inherit color when specified", () => {
      render(<Button color="inherit">Inherit</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toContain("inherit");
    });
  });

  describe("variants", () => {
    it("applies the solid variant by default", () => {
      render(<Button>Solid</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toContain("solid");
    });

    it("applies the outline variant when specified", () => {
      render(<Button variant="outline">Outline</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toContain("outline");
    });

    it("applies the ghost variant when specified", () => {
      render(<Button variant="ghost">Ghost</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toContain("ghost");
    });
  });

  describe("sizes", () => {
    it("applies the medium size by default", () => {
      render(<Button>Medium</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toContain("medium");
    });

    it("applies the small size when specified", () => {
      render(<Button size="small">Small</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toContain("small");
    });

    it("applies the large size when specified", () => {
      render(<Button size="large">Large</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toContain("large");
    });
  });

  describe("fullWidth", () => {
    it("does not apply fullWidth by default", () => {
      render(<Button>Default Width</Button>);
      const button = screen.getByRole("button");
      expect(button.className).not.toContain("fullWidth");
    });

    it("applies fullWidth class when prop is true", () => {
      render(<Button fullWidth>Full Width</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toContain("fullWidth");
    });
  });

  describe("disabled state", () => {
    it("is disabled when disabled prop is true", () => {
      render(<Button disabled>Disabled</Button>);
      const button = screen.getByRole("button");
      expect(button).toBeDisabled();
    });

    it("is not disabled by default", () => {
      render(<Button>Enabled</Button>);
      const button = screen.getByRole("button");
      expect(button).not.toBeDisabled();
    });
  });

  describe("click handling", () => {
    it("calls onClick when clicked", () => {
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Click me</Button>);
      fireEvent.click(screen.getByRole("button"));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("does not call onClick when disabled", () => {
      const handleClick = vi.fn();
      render(
        <Button disabled onClick={handleClick}>
          Disabled
        </Button>
      );
      fireEvent.click(screen.getByRole("button"));
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe("className", () => {
    it("applies additional className", () => {
      render(<Button className="custom-class">Custom</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toContain("custom-class");
    });
  });

  describe("icon-only", () => {
    it("renders icon-only button without children", () => {
      render(<Button aria-label="Mock action" icon={MockIcon} />);
      expect(screen.getByRole("button")).toBeInTheDocument();
      expect(screen.getByTestId("mock-icon")).toBeInTheDocument();
    });

    it("applies iconOnly class when only icon is present", () => {
      render(<Button aria-label="Mock action" icon={MockIcon} />);
      const button = screen.getByRole("button");
      expect(button.className).toContain("iconOnly");
    });

    it("does not apply iconOnly class when children are present", () => {
      render(<Button icon={MockIcon}>With Text</Button>);
      const button = screen.getByRole("button");
      expect(button.className).not.toContain("iconOnly");
    });

    it("does not apply iconOnly class when no icon is present", () => {
      render(<Button>Text Only</Button>);
      const button = screen.getByRole("button");
      expect(button.className).not.toContain("iconOnly");
    });
  });

  describe("aria-label", () => {
    it("applies aria-label attribute when provided", () => {
      render(<Button aria-label="Favorite" icon={MockIcon} />);
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("aria-label", "Favorite");
    });

    it("does not have aria-label when not provided", () => {
      render(<Button>Click me</Button>);
      const button = screen.getByRole("button");
      expect(button).not.toHaveAttribute("aria-label");
    });
  });

  describe("unstyledStates", () => {
    it("does not apply unstyledStates class by default", () => {
      render(<Button>Default</Button>);
      const button = screen.getByRole("button");
      expect(button.className).not.toContain("unstyledStates");
    });

    it("applies unstyledStates class when prop is true", () => {
      render(<Button unstyledStates>Unstyled</Button>);
      const button = screen.getByRole("button");
      expect(button.className).toContain("unstyledStates");
    });
  });
});
