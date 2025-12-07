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

describe("Text styling props", () => {
  describe("align", () => {
    it("sets --_ta CSS variable for text-align", () => {
      render(
        <Text align="center" data-testid="text">
          Content
        </Text>
      );
      const element = screen.getByTestId("text");
      expect(element.style.getPropertyValue("--_ta")).toBe("center");
    });

    it("supports all align values", () => {
      const values = ["left", "center", "right", "justify"] as const;
      values.forEach((value) => {
        const { unmount } = render(
          <Text align={value} data-testid="text">
            Content
          </Text>
        );
        const element = screen.getByTestId("text");
        expect(element.style.getPropertyValue("--_ta")).toBe(value);
        unmount();
      });
    });
  });

  describe("decoration", () => {
    it("sets --_td CSS variable for text-decoration", () => {
      render(
        <Text decoration="underline" data-testid="text">
          Content
        </Text>
      );
      const element = screen.getByTestId("text");
      expect(element.style.getPropertyValue("--_td")).toBe("underline");
    });

    it("supports all decoration values", () => {
      const values = ["underline", "line-through", "none"] as const;
      values.forEach((value) => {
        const { unmount } = render(
          <Text decoration={value} data-testid="text">
            Content
          </Text>
        );
        const element = screen.getByTestId("text");
        expect(element.style.getPropertyValue("--_td")).toBe(value);
        unmount();
      });
    });
  });

  describe("transform", () => {
    it("sets --_tt CSS variable for text-transform", () => {
      render(
        <Text transform="uppercase" data-testid="text">
          Content
        </Text>
      );
      const element = screen.getByTestId("text");
      expect(element.style.getPropertyValue("--_tt")).toBe("uppercase");
    });

    it("supports all transform values", () => {
      const values = ["uppercase", "lowercase", "capitalize", "none"] as const;
      values.forEach((value) => {
        const { unmount } = render(
          <Text transform={value} data-testid="text">
            Content
          </Text>
        );
        const element = screen.getByTestId("text");
        expect(element.style.getPropertyValue("--_tt")).toBe(value);
        unmount();
      });
    });
  });

  describe("italic", () => {
    it("sets --_fs CSS variable to italic when true", () => {
      render(
        <Text italic data-testid="text">
          Content
        </Text>
      );
      const element = screen.getByTestId("text");
      expect(element.style.getPropertyValue("--_fs")).toBe("italic");
    });

    it("does not set --_fs when italic is false", () => {
      render(
        <Text italic={false} data-testid="text">
          Content
        </Text>
      );
      const element = screen.getByTestId("text");
      expect(element.style.getPropertyValue("--_fs")).toBe("");
    });
  });

  describe("truncate", () => {
    it("applies truncate class when true", () => {
      render(
        <Text truncate data-testid="text">
          Content
        </Text>
      );
      const element = screen.getByTestId("text");
      expect(element.className).toContain("truncate");
    });

    it("does not apply truncate class when false", () => {
      render(
        <Text truncate={false} data-testid="text">
          Content
        </Text>
      );
      const element = screen.getByTestId("text");
      expect(element.className).not.toContain("truncate");
    });
  });

  describe("maxLines", () => {
    it("applies lineClamp class and sets --_lc CSS variable", () => {
      render(
        <Text maxLines={3} data-testid="text">
          Content
        </Text>
      );
      const element = screen.getByTestId("text");
      expect(element.className).toContain("lineClamp");
      expect(element.style.getPropertyValue("--_lc")).toBe("3");
    });

    it("does not apply lineClamp class when not set", () => {
      render(<Text data-testid="text">Content</Text>);
      const element = screen.getByTestId("text");
      expect(element.className).not.toContain("lineClamp");
    });
  });

  describe("wrap", () => {
    it("sets --_tw CSS variable for text-wrap", () => {
      render(
        <Text wrap="balance" data-testid="text">
          Content
        </Text>
      );
      const element = screen.getByTestId("text");
      expect(element.style.getPropertyValue("--_tw")).toBe("balance");
    });

    it("supports all wrap values", () => {
      const values = ["balance", "pretty", "wrap", "nowrap"] as const;
      values.forEach((value) => {
        const { unmount } = render(
          <Text wrap={value} data-testid="text">
            Content
          </Text>
        );
        const element = screen.getByTestId("text");
        expect(element.style.getPropertyValue("--_tw")).toBe(value);
        unmount();
      });
    });
  });

  describe("combined props", () => {
    it("supports multiple styling props together", () => {
      render(
        <Text
          align="center"
          decoration="underline"
          transform="uppercase"
          italic
          wrap="balance"
          data-testid="text"
        >
          Content
        </Text>
      );
      const element = screen.getByTestId("text");
      expect(element.style.getPropertyValue("--_ta")).toBe("center");
      expect(element.style.getPropertyValue("--_td")).toBe("underline");
      expect(element.style.getPropertyValue("--_tt")).toBe("uppercase");
      expect(element.style.getPropertyValue("--_fs")).toBe("italic");
      expect(element.style.getPropertyValue("--_tw")).toBe("balance");
    });
  });
});
