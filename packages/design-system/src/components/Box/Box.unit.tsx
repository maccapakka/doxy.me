import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Box, Card, Container, Nav } from "./Box";

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
        <Box aria-label="Test" data-testid="test-box">
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

    it("sets --_bg CSS variable with black color", () => {
      const { container } = render(<Box background="black">Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_bg")).toBe(
        "var(--dxy-color-black)"
      );
    });

    it("sets --_bg CSS variable with white color", () => {
      const { container } = render(<Box background="white">Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_bg")).toBe(
        "var(--dxy-color-white)"
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

    it("sets --_mw CSS variable for maxWidth", () => {
      const { container } = render(<Box maxWidth="1440px">Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_mw")).toBe("1440px");
    });

    it("sets --_h CSS variable for height", () => {
      const { container } = render(<Box height="100vh">Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_h")).toBe("100vh");
    });
  });

  describe("border radius props", () => {
    it("applies borderRadius1 class by default", () => {
      const { container } = render(<Box>Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.className).toContain("borderRadius1");
    });

    it("applies borderRadius1 class", () => {
      const { container } = render(<Box borderRadius={1}>Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.className).toContain("borderRadius1");
    });

    it("applies borderRadius2 class", () => {
      const { container } = render(<Box borderRadius={2}>Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.className).toContain("borderRadius2");
    });

    it("applies borderRadius3 class", () => {
      const { container } = render(<Box borderRadius={3}>Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.className).toContain("borderRadius3");
    });

    it("applies borderRadiusCircle class", () => {
      const { container } = render(<Box borderRadius="circle">Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.className).toContain("borderRadiusCircle");
    });
  });

  describe("corner shape props", () => {
    it("sets --_cs CSS variable with round by default", () => {
      const { container } = render(<Box>Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_cs")).toBe("round");
    });

    it("sets --_cs CSS variable with round", () => {
      const { container } = render(<Box cornerShape="round">Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_cs")).toBe("round");
    });

    it("sets --_cs CSS variable with scoop", () => {
      const { container } = render(<Box cornerShape="scoop">Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_cs")).toBe("scoop");
    });

    it("sets --_cs CSS variable with bevel", () => {
      const { container } = render(<Box cornerShape="bevel">Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_cs")).toBe("bevel");
    });

    it("sets --_cs CSS variable with notch", () => {
      const { container } = render(<Box cornerShape="notch">Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_cs")).toBe("notch");
    });

    it("sets --_cs CSS variable with squircle", () => {
      const { container } = render(<Box cornerShape="squircle">Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_cs")).toBe("squircle");
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

  describe("grid props", () => {
    it("applies grid class when gridTemplateColumns is provided", () => {
      const { container } = render(
        <Box gridTemplateColumns="1fr 1fr">Content</Box>
      );
      const box = container.firstChild as HTMLElement;

      expect(box.className).toContain("grid");
    });

    it("applies grid class when gridTemplateRows is provided", () => {
      const { container } = render(
        <Box gridTemplateRows="auto 1fr auto">Content</Box>
      );
      const box = container.firstChild as HTMLElement;

      expect(box.className).toContain("grid");
    });

    it("applies grid class when gridTemplateAreas is provided", () => {
      const { container } = render(
        <Box gridTemplateAreas="'header header' 'sidebar main'">Content</Box>
      );
      const box = container.firstChild as HTMLElement;

      expect(box.className).toContain("grid");
    });

    it("does not apply grid class when only gridArea is provided", () => {
      const { container } = render(<Box gridArea="header">Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.className).not.toContain("grid");
    });

    it("does not apply grid class by default", () => {
      const { container } = render(<Box>Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.className).not.toContain("grid");
    });

    it("sets --_gtc CSS variable for gridTemplateColumns", () => {
      const { container } = render(
        <Box gridTemplateColumns="1fr 2fr 1fr">Content</Box>
      );
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_gtc")).toBe("1fr 2fr 1fr");
    });

    it("sets --_gtr CSS variable for gridTemplateRows", () => {
      const { container } = render(
        <Box gridTemplateRows="100px auto 50px">Content</Box>
      );
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_gtr")).toBe("100px auto 50px");
    });

    it("sets --_gta CSS variable for gridTemplateAreas", () => {
      const { container } = render(
        <Box gridTemplateAreas="'a b' 'c d'">Content</Box>
      );
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_gta")).toBe("'a b' 'c d'");
    });

    it("sets --_ga CSS variable for gridArea", () => {
      const { container } = render(<Box gridArea="sidebar">Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_ga")).toBe("sidebar");
    });

    it("applies grid class with multiple template props", () => {
      const { container } = render(
        <Box
          gridTemplateAreas="'header header' 'sidebar main'"
          gridTemplateColumns="1fr 1fr"
          gridTemplateRows="auto 1fr"
        >
          Content
        </Box>
      );
      const box = container.firstChild as HTMLElement;

      expect(box.className).toContain("grid");
      expect(box.style.getPropertyValue("--_gtc")).toBe("1fr 1fr");
      expect(box.style.getPropertyValue("--_gtr")).toBe("auto 1fr");
      expect(box.style.getPropertyValue("--_gta")).toBe(
        "'header header' 'sidebar main'"
      );
    });
  });

  describe("elevated prop", () => {
    it("applies elevated class when elevated is true", () => {
      const { container } = render(<Box elevated>Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.className).toContain("elevated");
    });

    it("does not apply elevated class when elevated is false", () => {
      const { container } = render(<Box elevated={false}>Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.className).not.toContain("elevated");
    });

    it("does not apply elevated class by default", () => {
      const { container } = render(<Box>Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.className).not.toContain("elevated");
    });
  });

  describe("elevation background", () => {
    it("sets --_bg CSS variable with elevation color", () => {
      const { container } = render(<Box background="elevation">Content</Box>);
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_bg")).toBe(
        "var(--dxy-color-elevation)"
      );
    });
  });

  describe("Card alias", () => {
    it("renders with elevation background", () => {
      const { container } = render(<Card>Content</Card>);
      const card = container.firstChild as HTMLElement;

      expect(card.style.getPropertyValue("--_bg")).toBe(
        "var(--dxy-color-elevation)"
      );
    });

    it("applies elevated class", () => {
      const { container } = render(<Card>Content</Card>);
      const card = container.firstChild as HTMLElement;

      expect(card.className).toContain("elevated");
    });

    it("accepts other Box props", () => {
      const { container } = render(
        <Card borderRadius={2} padding={4}>
          Content
        </Card>
      );
      const card = container.firstChild as HTMLElement;

      expect(card.style.getPropertyValue("--_pa")).toBe("4");
      expect(card.className).toContain("borderRadius2");
    });

    it("renders children correctly", () => {
      const { container } = render(<Card>Card content</Card>);
      const card = container.firstChild as HTMLElement;

      expect(card.textContent).toBe("Card content");
    });
  });

  describe("Nav alias", () => {
    it("renders as nav element", () => {
      const { container } = render(<Nav>Content</Nav>);
      const nav = container.firstChild as HTMLElement;

      expect(nav.tagName).toBe("NAV");
    });

    it("accepts Box props", () => {
      const { container } = render(
        <Nav gap={2} padding={4}>
          Content
        </Nav>
      );
      const nav = container.firstChild as HTMLElement;

      expect(nav.style.getPropertyValue("--_pa")).toBe("4");
      expect(nav.style.getPropertyValue("--_gap")).toBe("2");
    });
  });

  describe("Container alias", () => {
    it("sets width to 100%", () => {
      const { container } = render(<Container>Content</Container>);
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_w")).toBe("100%");
    });

    it("sets maxWidth to 1440px", () => {
      const { container } = render(<Container>Content</Container>);
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_mw")).toBe("1440px");
    });

    it("sets paddingInline to 6", () => {
      const { container } = render(<Container>Content</Container>);
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_px")).toBe("6");
    });

    it("accepts other Box props", () => {
      const { container } = render(
        <Container background="primary" padding={4}>
          Content
        </Container>
      );
      const box = container.firstChild as HTMLElement;

      expect(box.style.getPropertyValue("--_pa")).toBe("4");
      expect(box.style.getPropertyValue("--_bg")).toBe(
        "var(--dxy-color-primary)"
      );
    });
  });
});
