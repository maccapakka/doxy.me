import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Text, Title, Heading, Caption } from "./Text";

describe("Text", () => {
  it("renders children correctly", () => {
    render(<Text>Test content</Text>);
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("applies the root class by default", () => {
    render(<Text>Content</Text>);
    const element = screen.getByText("Content");
    expect(element.className).toContain("root");
  });

  it("applies additional className when provided", () => {
    render(<Text className="custom-class">Content</Text>);
    const element = screen.getByText("Content");
    expect(element.className).toContain("custom-class");
  });

  it("renders as span by default", () => {
    render(<Text data-testid="text">Content</Text>);
    const element = screen.getByTestId("text");
    expect(element.tagName).toBe("SPAN");
  });

  it("renders as custom element with as prop", () => {
    render(
      <Text as="p" data-testid="text">
        Content
      </Text>
    );
    const element = screen.getByTestId("text");
    expect(element.tagName).toBe("P");
  });

  describe("typography variants", () => {
    it("applies body-1 variant by default", () => {
      render(<Text data-testid="text">Content</Text>);
      const element = screen.getByTestId("text");
      expect(element.className).toContain("body-1");
    });

    it("applies title-1 variant", () => {
      render(
        <Text variant="title-1" data-testid="text">
          Content
        </Text>
      );
      const element = screen.getByTestId("text");
      expect(element.className).toContain("title-1");
    });

    it("applies title-2 variant", () => {
      render(
        <Text variant="title-2" data-testid="text">
          Content
        </Text>
      );
      const element = screen.getByTestId("text");
      expect(element.className).toContain("title-2");
    });

    it("applies title-3 variant", () => {
      render(
        <Text variant="title-3" data-testid="text">
          Content
        </Text>
      );
      const element = screen.getByTestId("text");
      expect(element.className).toContain("title-3");
    });

    it("applies featured-1 variant", () => {
      render(
        <Text variant="featured-1" data-testid="text">
          Content
        </Text>
      );
      const element = screen.getByTestId("text");
      expect(element.className).toContain("featured-1");
    });

    it("applies featured-2 variant", () => {
      render(
        <Text variant="featured-2" data-testid="text">
          Content
        </Text>
      );
      const element = screen.getByTestId("text");
      expect(element.className).toContain("featured-2");
    });

    it("applies featured-3 variant", () => {
      render(
        <Text variant="featured-3" data-testid="text">
          Content
        </Text>
      );
      const element = screen.getByTestId("text");
      expect(element.className).toContain("featured-3");
    });

    it("applies body-2 variant", () => {
      render(
        <Text variant="body-2" data-testid="text">
          Content
        </Text>
      );
      const element = screen.getByTestId("text");
      expect(element.className).toContain("body-2");
    });

    it("applies caption-1 variant", () => {
      render(
        <Text variant="caption-1" data-testid="text">
          Content
        </Text>
      );
      const element = screen.getByTestId("text");
      expect(element.className).toContain("caption-1");
    });

    it("applies caption-2 variant", () => {
      render(
        <Text variant="caption-2" data-testid="text">
          Content
        </Text>
      );
      const element = screen.getByTestId("text");
      expect(element.className).toContain("caption-2");
    });
  });

  describe("text colors", () => {
    it("does not apply color class when color is inherit (default)", () => {
      render(<Text data-testid="text">Content</Text>);
      const element = screen.getByTestId("text");
      // Should not have any color class
      expect(element.className).not.toContain("primary");
      expect(element.className).not.toContain("secondary");
      expect(element.className).not.toContain("critical");
    });

    it("applies primary color class", () => {
      render(
        <Text color="primary" data-testid="text">
          Content
        </Text>
      );
      const element = screen.getByTestId("text");
      expect(element.className).toContain("primary");
    });

    it("applies secondary color class", () => {
      render(
        <Text color="secondary" data-testid="text">
          Content
        </Text>
      );
      const element = screen.getByTestId("text");
      expect(element.className).toContain("secondary");
    });

    it("applies all color classes", () => {
      const colors = [
        "primary",
        "secondary",
        "accent",
        "warning",
        "positive",
        "critical",
        "neutral",
      ] as const;

      colors.forEach((color) => {
        const { unmount } = render(
          <Text color={color} data-testid="text">
            Content
          </Text>
        );
        const element = screen.getByTestId("text");
        expect(element.className).toContain(color);
        unmount();
      });
    });
  });
});

describe("Semantic aliases", () => {
  it("Title renders with Text props", () => {
    render(
      <Title variant="title-1" data-testid="title">
        Page Title
      </Title>
    );
    const element = screen.getByTestId("title");
    expect(element.className).toContain("title-1");
    expect(element.textContent).toBe("Page Title");
  });

  it("Heading renders with Text props", () => {
    render(
      <Heading variant="featured-1" data-testid="heading">
        Section Heading
      </Heading>
    );
    const element = screen.getByTestId("heading");
    expect(element.className).toContain("featured-1");
    expect(element.textContent).toBe("Section Heading");
  });

  it("Caption renders with Text props", () => {
    render(
      <Caption variant="caption-1" color="secondary" data-testid="caption">
        Image caption
      </Caption>
    );
    const element = screen.getByTestId("caption");
    expect(element.className).toContain("caption-1");
    expect(element.className).toContain("secondary");
    expect(element.textContent).toBe("Image caption");
  });

  it("aliases support as prop", () => {
    render(
      <Title as="h1" data-testid="title">
        H1 Title
      </Title>
    );
    const element = screen.getByTestId("title");
    expect(element.tagName).toBe("H1");
  });
});

