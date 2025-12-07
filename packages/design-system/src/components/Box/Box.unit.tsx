import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Box } from "./Box";

describe("Box", () => {
  describe("rendering", () => {
    it("renders with default props", () => {
      const { container } = render(<Box>Test content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box).toBeInTheDocument();
      expect(box.tagName).toBe("DIV");
      expect(box.textContent).toBe("Test content");
    });

    it("renders as different HTML elements via as prop", () => {
      const { container } = render(<Box as="section">Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.tagName).toBe("SECTION");
    });

    it("applies custom className", () => {
      const { container } = render(<Box className="custom-class">Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box).toHaveClass("custom-class");
    });

    it("passes through additional props", () => {
      const { container } = render(
        <Box data-testid="test-box" aria-label="Test">
          Content
        </Box>
      );
      const box = container.firstChild as HTMLElement;

      expect(box).toHaveAttribute("data-testid", "test-box");
      expect(box).toHaveAttribute("aria-label", "Test");
    });
  });

  describe("background colors", () => {
    it("sets --_bg CSS variable with primary color", () => {
      const { container } = render(<Box background="primary">Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_bg")).toBe(
        "var(--dxy-color-primary)"
      );
    });

    it("sets --_bg CSS variable with primary-subtle variant", () => {
      const { container } = render(
        <Box background="primary-subtle">Content</Box>
      );
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_bg")).toBe(
        "var(--dxy-color-primary-subtle)"
      );
    });

    it("sets --_bg CSS variable with primary-bold variant", () => {
      const { container } = render(
        <Box background="primary-bold">Content</Box>
      );
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_bg")).toBe(
        "var(--dxy-color-primary-bold)"
      );
    });

    it("sets --_bg CSS variable with secondary color", () => {
      const { container } = render(<Box background="secondary">Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_bg")).toBe(
        "var(--dxy-color-secondary)"
      );
    });

    it("sets --_bg CSS variable with secondary-subtle variant", () => {
      const { container } = render(
        <Box background="secondary-subtle">Content</Box>
      );
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_bg")).toBe(
        "var(--dxy-color-secondary-subtle)"
      );
    });

    it("sets --_bg CSS variable with secondary-bold variant", () => {
      const { container } = render(
        <Box background="secondary-bold">Content</Box>
      );
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_bg")).toBe(
        "var(--dxy-color-secondary-bold)"
      );
    });

    it("sets --_bg CSS variable with accent color", () => {
      const { container } = render(<Box background="accent">Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_bg")).toBe(
        "var(--dxy-color-accent)"
      );
    });

    it("sets --_bg CSS variable with accent-subtle variant", () => {
      const { container } = render(
        <Box background="accent-subtle">Content</Box>
      );
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_bg")).toBe(
        "var(--dxy-color-accent-subtle)"
      );
    });

    it("sets --_bg CSS variable with accent-bold variant", () => {
      const { container } = render(<Box background="accent-bold">Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_bg")).toBe(
        "var(--dxy-color-accent-bold)"
      );
    });

    it("sets --_bg CSS variable with warning color", () => {
      const { container } = render(<Box background="warning">Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_bg")).toBe(
        "var(--dxy-color-warning)"
      );
    });

    it("sets --_bg CSS variable with warning-subtle variant", () => {
      const { container } = render(
        <Box background="warning-subtle">Content</Box>
      );
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_bg")).toBe(
        "var(--dxy-color-warning-subtle)"
      );
    });

    it("sets --_bg CSS variable with warning-bold variant", () => {
      const { container } = render(
        <Box background="warning-bold">Content</Box>
      );
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_bg")).toBe(
        "var(--dxy-color-warning-bold)"
      );
    });

    it("sets --_bg CSS variable with positive color", () => {
      const { container } = render(<Box background="positive">Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_bg")).toBe(
        "var(--dxy-color-positive)"
      );
    });

    it("sets --_bg CSS variable with positive-subtle variant", () => {
      const { container } = render(
        <Box background="positive-subtle">Content</Box>
      );
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_bg")).toBe(
        "var(--dxy-color-positive-subtle)"
      );
    });

    it("sets --_bg CSS variable with positive-bold variant", () => {
      const { container } = render(
        <Box background="positive-bold">Content</Box>
      );
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_bg")).toBe(
        "var(--dxy-color-positive-bold)"
      );
    });

    it("sets --_bg CSS variable with critical color", () => {
      const { container } = render(<Box background="critical">Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_bg")).toBe(
        "var(--dxy-color-critical)"
      );
    });

    it("sets --_bg CSS variable with critical-subtle variant", () => {
      const { container } = render(
        <Box background="critical-subtle">Content</Box>
      );
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_bg")).toBe(
        "var(--dxy-color-critical-subtle)"
      );
    });

    it("sets --_bg CSS variable with critical-bold variant", () => {
      const { container } = render(
        <Box background="critical-bold">Content</Box>
      );
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_bg")).toBe(
        "var(--dxy-color-critical-bold)"
      );
    });

    it("sets --_bg CSS variable with neutral color", () => {
      const { container } = render(<Box background="neutral">Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_bg")).toBe(
        "var(--dxy-color-neutral)"
      );
    });

    it("sets --_bg CSS variable with neutral-subtle variant", () => {
      const { container } = render(
        <Box background="neutral-subtle">Content</Box>
      );
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_bg")).toBe(
        "var(--dxy-color-neutral-subtle)"
      );
    });

    it("sets --_bg CSS variable with neutral-bold variant", () => {
      const { container } = render(
        <Box background="neutral-bold">Content</Box>
      );
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_bg")).toBe(
        "var(--dxy-color-neutral-bold)"
      );
    });

    it("does not set --_bg CSS variable when background is undefined", () => {
      const { container } = render(<Box>Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_bg")).toBe("");
    });
  });

  describe("layout props", () => {
    it("sets --_dir CSS variable for direction", () => {
      const { container } = render(<Box direction="column">Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_dir")).toBe("column");
    });

    it("sets --_gap CSS variable with default value", () => {
      const { container } = render(<Box>Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_gap")).toBe("2");
    });

    it("sets --_gap CSS variable with custom value", () => {
      const { container } = render(<Box gap={6}>Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_gap")).toBe("6");
    });

    it("sets --_ai CSS variable for alignItems", () => {
      const { container } = render(<Box alignItems="center">Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_ai")).toBe("center");
    });

    it("sets --_jc CSS variable for justifyContent", () => {
      const { container } = render(
        <Box justifyContent="space-between">Content</Box>
      );
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_jc")).toBe("space-between");
    });

    it("sets --_as CSS variable for alignSelf", () => {
      const { container } = render(<Box alignSelf="flex-end">Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_as")).toBe("flex-end");
    });

    it("sets --_js CSS variable for justifySelf", () => {
      const { container } = render(<Box justifySelf="center">Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_js")).toBe("center");
    });
  });

  describe("spacing props", () => {
    it("sets --_pa CSS variable for padding", () => {
      const { container } = render(<Box padding={4}>Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_pa")).toBe("4");
    });

    it("sets --_py CSS variable for paddingBlock", () => {
      const { container } = render(<Box paddingBlock={6}>Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_py")).toBe("6");
    });

    it("sets --_px CSS variable for paddingInline", () => {
      const { container } = render(<Box paddingInline={8}>Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_px")).toBe("8");
    });
  });

  describe("sizing props", () => {
    it("sets --_w CSS variable for width", () => {
      const { container } = render(<Box width="300px">Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_w")).toBe("300px");
    });

    it("sets --_h CSS variable for height", () => {
      const { container } = render(<Box height="100vh">Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_h")).toBe("100vh");
    });
  });

  describe("custom styles", () => {
    it("merges custom inline styles", () => {
      const { container } = render(
        <Box style={{ color: "red", fontSize: "16px" }}>Content</Box>
      );
      const box = container.firstChild as HTMLElement;

      expect(box.style.color).toBe("red");
      expect(box.style.fontSize).toBe("16px");
    });

    it("custom styles do not override CSS variables", () => {
      const { container } = render(
        <Box background="primary" style={{ color: "red" }}>
          Content
        </Box>
      );
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_bg")).toBe(
        "var(--dxy-color-primary)"
      );
      expect(box.style.color).toBe("red");
    });
  });
});
