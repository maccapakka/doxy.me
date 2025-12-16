import type { Meta, StoryObj } from "@storybook/react-vite";

import type { TextProps } from "./Text";

import { Box, Stack } from "../Box";
import { Caption, Heading, Text, Title } from "./Text";

const meta: Meta<typeof Text> = {
  argTypes: {
    align: {
      control: "select",
      description: "Text alignment",
      options: ["left", "center", "right", "justify"],
      table: { category: "Styling" },
    },
    // Element
    as: {
      control: "select",
      description: "The element type to render",
      options: [
        "span",
        "p",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "label",
        "div",
      ],
      table: { category: "Element" },
    },
    children: {
      control: "text",
      description: "The content to display",
      table: { category: "Element" },
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
      table: { category: "Element" },
    },
    // Styling
    color: {
      control: "select",
      description: "Text color from design tokens",
      options: [
        "inherit",
        "primary",
        "secondary",
        "accent",
        "warning",
        "positive",
        "critical",
        "neutral",
      ],
      table: { category: "Styling" },
    },
    decoration: {
      control: "select",
      description: "Text decoration",
      options: ["underline", "line-through", "none"],
      table: { category: "Styling" },
    },
    italic: {
      control: "boolean",
      description: "Render text in italic",
      table: { category: "Styling" },
    },
    maxLines: {
      control: "number",
      description: "Maximum lines before truncating (multi-line clamp)",
      table: { category: "Styling" },
    },
    transform: {
      control: "select",
      description: "Text transform",
      options: ["uppercase", "lowercase", "capitalize", "none"],
      table: { category: "Styling" },
    },
    truncate: {
      control: "boolean",
      description: "Truncate text with ellipsis (single line)",
      table: { category: "Styling" },
    },
    // Typography
    variant: {
      control: "select",
      description: "Typography variant from design tokens",
      options: [
        "title-1",
        "title-2",
        "title-3",
        "featured-1",
        "featured-2",
        "featured-3",
        "body-1",
        "body-2",
        "caption-1",
        "caption-2",
      ],
      table: { category: "Typography" },
    },
    wrap: {
      control: "select",
      description: "Text wrapping behavior",
      options: ["balance", "pretty", "wrap", "nowrap"],
      table: { category: "Styling" },
    },
  },
  component: Text,
  parameters: {
    docs: {
      description: {
        component:
          "Text renders typography using design tokens from a 1.2 typescale. It supports 10 variants from `title-1` (largest) to `caption-2` (smallest), semantic colors, and polymorphic rendering via the `as` prop. Use the `Title`, `Heading`, and `Caption` aliases for improved code readability.",
      },
      subtitle: "A foundational typography primitive with semantic aliases",
    },
  },
  tags: ["autodocs"],
  title: "Components/Text",
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  name: "Typography Scale",
  parameters: {
    docs: {
      description: {
        story:
          "All 10 typography variants from `title-1` (largest) to `caption-2` (smallest), each displayed with a pangram to showcase the complete character set.",
      },
    },
  },
  render: () => (
    <Box direction="column" gap={6}>
      {(
        [
          "title-1",
          "title-2",
          "title-3",
          "featured-1",
          "featured-2",
          "featured-3",
          "body-1",
          "body-2",
          "caption-1",
          "caption-2",
        ] as const
      ).map((variant) => (
        <Stack gap={1} key={variant}>
          <Text color="secondary" variant="caption-1">
            {variant}
          </Text>
          <Text variant={variant as TextProps["variant"]}>
            The quick brown fox jumps over the lazy dog
          </Text>
        </Stack>
      ))}
    </Box>
  ),
};

export const AllColors: Story = {
  name: "Color Palette",
  parameters: {
    docs: {
      description: {
        story:
          "All semantic color options. Use these to convey meaning: `critical` for errors, `positive` for success, `warning` for cautions, and `secondary` for muted text.",
      },
    },
  },
  render: () => (
    <Box background="secondary" direction="column" gap={2} padding={4}>
      <Text color="primary">Primary color</Text>
      <Text color="secondary">Secondary color</Text>
      <Text color="accent">Accent color</Text>
      <Text color="warning">Warning color</Text>
      <Text color="positive">Positive color</Text>
      <Text color="critical">Critical color</Text>
      <Text color="neutral">Neutral color</Text>
      <Text color="inherit" style={{ color: "white" }}>
        Inherit color (from parent)
      </Text>
    </Box>
  ),
};

export const VariantWithColor: Story = {
  args: {
    children: "Error: Something went wrong!",
    color: "critical",
    variant: "featured-1",
  },
  name: "Variant + Color",
  parameters: {
    docs: {
      description: {
        story:
          "Combine any typography variant with any color. This example shows a `featured-1` variant with `critical` color for an error message.",
      },
    },
  },
};

export const PolymorphicRendering: Story = {
  name: "Polymorphic (as prop)",
  parameters: {
    docs: {
      description: {
        story:
          "Use the `as` prop to render semantic HTML elements. Typography styling is independent of the element, so you can use `title-1` styling on an `<h1>` or any other element.",
      },
    },
  },
  render: () => (
    <Box direction="column" gap={4}>
      <Text as="h1" variant="title-1">
        Renders as h1
      </Text>
      <Text as="h2" variant="title-2">
        Renders as h2
      </Text>
      <Text as="p" variant="body-1">
        Renders as paragraph
      </Text>
      <Text as="label" variant="caption-1">
        Renders as label
      </Text>
    </Box>
  ),
};

// Semantic aliases stories
export const SemanticAliases: Story = {
  name: "Semantic Aliases",
  parameters: {
    docs: {
      description: {
        story:
          "The `Title`, `Heading`, and `Caption` aliases are identical to `Text` but improve code readability. Use `Title` for page/section titles, `Heading` for section headings, and `Caption` for captions, labels, and metadata.",
      },
    },
  },
  render: () => (
    <Box direction="column" gap={8}>
      <Box direction="column" gap={4}>
        <Text color="secondary" variant="body-2">
          Title Alias
        </Text>
        <Box direction="column" gap={3}>
          <Title variant="title-1">Page Title with Title alias</Title>
          <Title color="primary" variant="title-2">
            Colored Title
          </Title>
          <Title as="h1" variant="title-1">
            H1 Title
          </Title>
        </Box>
      </Box>
      <Box direction="column" gap={4}>
        <Text color="secondary" variant="body-2">
          Heading Alias
        </Text>
        <Box direction="column" gap={3}>
          <Heading variant="featured-1">Section Heading</Heading>
          <Heading color="accent" variant="featured-2">
            Accented Heading
          </Heading>
          <Heading as="h3" variant="title-3">
            H3 Heading
          </Heading>
        </Box>
      </Box>
      <Box direction="column" gap={4}>
        <Text color="secondary" variant="body-2">
          Caption Alias
        </Text>
        <Box direction="column" gap={2}>
          <Caption variant="caption-1">Image caption text</Caption>
          <Caption color="secondary" variant="caption-2">
            Secondary caption
          </Caption>
          <Caption color="critical" variant="body-2">
            Error message as caption
          </Caption>
        </Box>
      </Box>
    </Box>
  ),
};

export const TypographyHierarchy: Story = {
  name: "Typography Hierarchy",
  parameters: {
    docs: {
      description: {
        story:
          "A realistic example showing how to combine Title, Heading, Text, and Caption to create a clear visual hierarchy on a page.",
      },
    },
  },
  render: () => (
    <Box direction="column" gap={6} padding={6}>
      <Title as="h1" variant="title-1">
        Welcome to Our Platform
      </Title>
      <Text color="secondary" variant="featured-1">
        Discover amazing features and capabilities that will transform your
        workflow.
      </Text>
      <Box direction="column" gap={4}>
        <Heading as="h2" variant="title-3">
          Getting Started
        </Heading>
        <Text variant="body-1">
          Follow these simple steps to begin your journey. Our platform is
          designed to be intuitive and easy to use, even for beginners.
        </Text>
        <Caption color="secondary" variant="caption-1">
          Last updated: December 2025
        </Caption>
      </Box>
    </Box>
  ),
};

export const FormLabels: Story = {
  name: "Form Labels",
  parameters: {
    docs: {
      description: {
        story:
          'Use Text with `as="label"` for form labels and Caption for help text or validation messages. Pair with semantic colors for error states.',
      },
    },
  },
  render: () => (
    <Box direction="column" gap={4}>
      <Box direction="column" gap={1}>
        <Text as="label" variant="body-2">
          Email Address
        </Text>
        <input
          placeholder="you@example.com"
          style={{ fontSize: "16px", padding: "8px" }}
          type="email"
        />
        <Caption color="secondary" variant="caption-1">
          We&apos;ll never share your email.
        </Caption>
      </Box>
      <Box direction="column" gap={1}>
        <Text as="label" variant="body-2">
          Password
        </Text>
        <input
          placeholder="••••••••"
          style={{ fontSize: "16px", padding: "8px" }}
          type="password"
        />
        <Caption color="critical" variant="caption-1">
          Password must be at least 8 characters.
        </Caption>
      </Box>
    </Box>
  ),
};

export const ErrorStates: Story = {
  name: "Feedback States",
  parameters: {
    docs: {
      description: {
        story:
          "Use semantic colors to communicate feedback: `critical` for errors, `positive` for success, and `warning` for cautions.",
      },
    },
  },
  render: () => (
    <Box direction="column" gap={4}>
      <Box direction="column" gap={1}>
        <Text color="critical" variant="featured-2">
          Error: Invalid credentials
        </Text>
        <Text color="critical" variant="body-1">
          Please check your email and password and try again.
        </Text>
      </Box>
      <Box direction="column" gap={1}>
        <Text color="positive" variant="featured-2">
          Success!
        </Text>
        <Text color="positive" variant="body-1">
          Your account has been created successfully.
        </Text>
      </Box>
      <Box direction="column" gap={1}>
        <Text color="warning" variant="featured-2">
          Warning
        </Text>
        <Text color="warning" variant="body-1">
          Your session will expire in 5 minutes.
        </Text>
      </Box>
    </Box>
  ),
};

export const TextAlignment: Story = {
  name: "Text Alignment",
  parameters: {
    docs: {
      description: {
        story:
          "Use the `align` prop to control text alignment: `left`, `center`, `right`, or `justify`.",
      },
    },
  },
  render: () => (
    <Box direction="column" gap={4}>
      <Box direction="column" gap={1}>
        <Caption color="secondary" variant="caption-1">
          align=&quot;left&quot; (default)
        </Caption>
        <Text align="left" as="p">
          The quick brown fox jumps over the lazy dog.
        </Text>
      </Box>
      <Box direction="column" gap={1}>
        <Caption color="secondary" variant="caption-1">
          align=&quot;center&quot;
        </Caption>
        <Text align="center" as="p">
          The quick brown fox jumps over the lazy dog.
        </Text>
      </Box>
      <Box direction="column" gap={1}>
        <Caption color="secondary" variant="caption-1">
          align=&quot;right&quot;
        </Caption>
        <Text align="right" as="p">
          The quick brown fox jumps over the lazy dog.
        </Text>
      </Box>
      <Box direction="column" gap={1}>
        <Caption color="secondary" variant="caption-1">
          align=&quot;justify&quot;
        </Caption>
        <Text align="justify" as="p">
          The quick brown fox jumps over the lazy dog. This text is longer to
          demonstrate the justify alignment which spreads words evenly across
          each line.
        </Text>
      </Box>
    </Box>
  ),
};

export const TextDecoration: Story = {
  name: "Text Decoration",
  parameters: {
    docs: {
      description: {
        story:
          "Use the `decoration` prop to add underline or line-through effects.",
      },
    },
  },
  render: () => (
    <Box direction="column" gap={4}>
      <Text decoration="underline">Underlined text</Text>
      <Text decoration="line-through">Strikethrough text</Text>
      <Text decoration="none">No decoration (explicit)</Text>
    </Box>
  ),
};

export const TextTransform: Story = {
  name: "Text Transform",
  parameters: {
    docs: {
      description: {
        story:
          "Use the `transform` prop to change text casing: `uppercase`, `lowercase`, or `capitalize`.",
      },
    },
  },
  render: () => (
    <Box direction="column" gap={4}>
      <Text transform="uppercase">uppercase text</Text>
      <Text transform="lowercase">LOWERCASE TEXT</Text>
      <Text transform="capitalize">capitalize each word</Text>
    </Box>
  ),
};

export const ItalicText: Story = {
  name: "Italic Text",
  parameters: {
    docs: {
      description: {
        story: "Use the `italic` prop to render text in italic style.",
      },
    },
  },
  render: () => (
    <Box direction="column" gap={4}>
      <Text>Normal text</Text>
      <Text italic>Italic text</Text>
      <Text italic variant="featured-1">
        Featured italic text
      </Text>
    </Box>
  ),
};

export const TextOverflowAndWrapping: Story = {
  name: "Text Overflow & Wrapping",
  parameters: {
    docs: {
      description: {
        story:
          "Control how text overflows and wraps. Use `truncate` for single-line ellipsis, `maxLines` for multi-line clamping, and `wrap` to control wrapping behavior.",
      },
    },
  },
  render: () => (
    <Box direction="column" gap={8}>
      <Box direction="column" gap={4}>
        <Text color="secondary" variant="body-2">
          Truncation
        </Text>
        <Box direction="column" gap={4}>
          <Box direction="column" gap={1}>
            <Caption color="secondary" variant="caption-1">
              truncate (single line)
            </Caption>
            <Box style={{ maxWidth: "300px" }}>
              <Text truncate>
                This is a very long text that will be truncated with an ellipsis
                when it exceeds the container width.
              </Text>
            </Box>
          </Box>
          <Box direction="column" gap={1}>
            <Caption color="secondary" variant="caption-1">
              maxLines=&#123;2&#125;
            </Caption>
            <Box style={{ maxWidth: "300px" }}>
              <Text maxLines={2}>
                This is a longer text that will be clamped to exactly two lines.
                Any content beyond the second line will be hidden with an
                ellipsis at the end.
              </Text>
            </Box>
          </Box>
          <Box direction="column" gap={1}>
            <Caption color="secondary" variant="caption-1">
              maxLines=&#123;3&#125;
            </Caption>
            <Box style={{ maxWidth: "300px" }}>
              <Text maxLines={3}>
                This is an even longer text that demonstrates three-line
                clamping. The content will be visible for three full lines
                before being truncated with an ellipsis. This is useful for card
                descriptions or preview text.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box direction="column" gap={4}>
        <Text color="secondary" variant="body-2">
          Text Wrapping
        </Text>
        <Box direction="column" gap={4}>
          <Box direction="column" gap={1}>
            <Caption color="secondary" variant="caption-1">
              wrap=&quot;balance&quot; (balances line lengths)
            </Caption>
            <Box style={{ maxWidth: "400px" }}>
              <Title variant="title-2" wrap="balance">
                A Balanced Heading That Wraps Nicely Across Lines
              </Title>
            </Box>
          </Box>
          <Box direction="column" gap={1}>
            <Caption color="secondary" variant="caption-1">
              wrap=&quot;pretty&quot; (avoids orphans)
            </Caption>
            <Box style={{ maxWidth: "400px" }}>
              <Text wrap="pretty">
                This paragraph uses pretty wrapping which tries to avoid orphan
                words at the end of a paragraph.
              </Text>
            </Box>
          </Box>
          <Box direction="column" gap={1}>
            <Caption color="secondary" variant="caption-1">
              wrap=&quot;nowrap&quot;
            </Caption>
            <Text wrap="nowrap">This text will not wrap to the next line.</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  ),
};

export const CombinedStyles: Story = {
  name: "Combined Styles",
  parameters: {
    docs: {
      description: {
        story: "Multiple text styling props can be combined together.",
      },
    },
  },
  render: () => (
    <Box direction="column" gap={4}>
      <Text color="primary" decoration="underline" transform="uppercase">
        Uppercase underlined primary text
      </Text>
      <Text align="center" as="p" color="secondary" italic>
        Centered italic secondary text
      </Text>
      <Text
        color="accent"
        decoration="underline"
        transform="capitalize"
        variant="featured-2"
      >
        featured capitalized accent underline
      </Text>
    </Box>
  ),
};
