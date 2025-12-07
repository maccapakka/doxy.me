import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Box, Section, Article, Header, Footer, Aside } from "./Box";

describe("Box", () => {
  it("renders children correctly", () => {
    render(<Box>Test content</Box>);
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("applies the root class by default", () => {
    render(<Box>Content</Box>);
    const element = screen.getByText("Content");
    expect(element.className).toContain("root");
  });

  it("applies additional className when provided", () => {
    render(<Box className="custom-class">Content</Box>);
    const element = screen.getByText("Content");
    expect(element.className).toContain("custom-class");
  });

  it("renders as div by default", () => {
    render(<Box data-testid="box">Content</Box>);
    const element = screen.getByTestId("box");
    expect(element.tagName).toBe("DIV");
  });

  it("renders as custom element with as prop", () => {
    render(
      <Box as="section" data-testid="box">
        Content
      </Box>
    );
    const element = screen.getByTestId("box");
    expect(element.tagName).toBe("SECTION");
  });

  describe("CSS custom properties", () => {
    it("does not render undefined props in style attribute", () => {
      render(<Box data-testid="box">Content</Box>);
      const element = screen.getByTestId("box");
      // Only --_gap should be set (has default), others should be empty
      expect(element.style.getPropertyValue("--_gap")).toBe("2");
      expect(element.style.getPropertyValue("--_pa")).toBe("");
      expect(element.style.getPropertyValue("--_px")).toBe("");
      expect(element.style.getPropertyValue("--_py")).toBe("");
      expect(element.style.getPropertyValue("--_dir")).toBe("");
      expect(element.style.getPropertyValue("--_ai")).toBe("");
      expect(element.style.getPropertyValue("--_jc")).toBe("");
    });

    it("sets --_pa for padding prop", () => {
      render(
        <Box padding={4} data-testid="box">
          Content
        </Box>
      );
      const element = screen.getByTestId("box");
      expect(element.style.getPropertyValue("--_pa")).toBe("4");
    });

    it("sets --_px for paddingInline prop", () => {
      render(
        <Box paddingInline={6} data-testid="box">
          Content
        </Box>
      );
      const element = screen.getByTestId("box");
      expect(element.style.getPropertyValue("--_px")).toBe("6");
    });

    it("sets --_py for paddingBlock prop", () => {
      render(
        <Box paddingBlock={8} data-testid="box">
          Content
        </Box>
      );
      const element = screen.getByTestId("box");
      expect(element.style.getPropertyValue("--_py")).toBe("8");
    });

    it("sets --_gap for gap prop", () => {
      render(
        <Box gap={4} data-testid="box">
          Content
        </Box>
      );
      const element = screen.getByTestId("box");
      expect(element.style.getPropertyValue("--_gap")).toBe("4");
    });
  });

  describe("flex properties", () => {
    it("sets --_dir for direction prop", () => {
      render(
        <Box direction="column" data-testid="box">
          Content
        </Box>
      );
      const element = screen.getByTestId("box");
      expect(element.style.getPropertyValue("--_dir")).toBe("column");
    });

    it("sets --_ai for alignItems prop", () => {
      render(
        <Box alignItems="center" data-testid="box">
          Content
        </Box>
      );
      const element = screen.getByTestId("box");
      expect(element.style.getPropertyValue("--_ai")).toBe("center");
    });

    it("sets --_jc for justifyContent prop", () => {
      render(
        <Box justifyContent="space-between" data-testid="box">
          Content
        </Box>
      );
      const element = screen.getByTestId("box");
      expect(element.style.getPropertyValue("--_jc")).toBe("space-between");
    });

    it("sets --_as for alignSelf prop", () => {
      render(
        <Box alignSelf="flex-end" data-testid="box">
          Content
        </Box>
      );
      const element = screen.getByTestId("box");
      expect(element.style.getPropertyValue("--_as")).toBe("flex-end");
    });

    it("sets --_js for justifySelf prop", () => {
      render(
        <Box justifySelf="center" data-testid="box">
          Content
        </Box>
      );
      const element = screen.getByTestId("box");
      expect(element.style.getPropertyValue("--_js")).toBe("center");
    });
  });

  describe("background colors", () => {
    it("applies primary background class", () => {
      render(
        <Box background="primary" data-testid="box">
          Content
        </Box>
      );
      const element = screen.getByTestId("box");
      expect(element.className).toContain("primary");
    });

    it("applies secondary background class", () => {
      render(
        <Box background="secondary" data-testid="box">
          Content
        </Box>
      );
      const element = screen.getByTestId("box");
      expect(element.className).toContain("secondary");
    });

    it("applies all background color classes", () => {
      const colors = [
        "primary",
        "secondary",
        "accent",
        "warning",
        "positive",
        "critical",
      ] as const;

      colors.forEach((color) => {
        const { unmount } = render(
          <Box background={color} data-testid="box">
            Content
          </Box>
        );
        const element = screen.getByTestId("box");
        expect(element.className).toContain(color);
        unmount();
      });
    });
  });
});

describe("Semantic aliases", () => {
  it("Section renders as section element", () => {
    render(<Section data-testid="section">Content</Section>);
    const element = screen.getByTestId("section");
    expect(element.tagName).toBe("SECTION");
  });

  it("Article renders as article element", () => {
    render(<Article data-testid="article">Content</Article>);
    const element = screen.getByTestId("article");
    expect(element.tagName).toBe("ARTICLE");
  });

  it("Header renders as header element", () => {
    render(<Header data-testid="header">Content</Header>);
    const element = screen.getByTestId("header");
    expect(element.tagName).toBe("HEADER");
  });

  it("Footer renders as footer element", () => {
    render(<Footer data-testid="footer">Content</Footer>);
    const element = screen.getByTestId("footer");
    expect(element.tagName).toBe("FOOTER");
  });

  it("Aside renders as aside element", () => {
    render(<Aside data-testid="aside">Content</Aside>);
    const element = screen.getByTestId("aside");
    expect(element.tagName).toBe("ASIDE");
  });

  it("semantic aliases accept Box props", () => {
    render(
      <Section padding={4} gap={2} background="primary" data-testid="section">
        Content
      </Section>
    );
    const element = screen.getByTestId("section");
    expect(element.style.getPropertyValue("--_pa")).toBe("4");
    expect(element.style.getPropertyValue("--_gap")).toBe("2");
    expect(element.className).toContain("primary");
  });
});
