import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Box,
  Section,
  Article,
  Header,
  Footer,
  Aside,
  Stack,
  Cluster,
  Placeholder,
} from "./Box";
import { Text } from "../Text";

const meta: Meta<typeof Box> = {
  component: Box,
  title: "Components/Box",
  tags: ["autodocs"],
  parameters: {
    docs: {
      subtitle: "A flexible layout primitive for building UI compositions",
      description: {
        component:
          "Box is a foundational layout component that provides flexbox-based layouts with token-based spacing. It supports polymorphic rendering via the `as` prop, semantic HTML aliases (`Section`, `Article`, `Header`, `Footer`, `Aside`), and layout aliases (`Stack` for vertical, `Cluster` for horizontal layouts).",
      },
    },
  },
  argTypes: {
    // Element
    as: {
      description: "The element type to render",
      control: "select",
      options: [
        "div",
        "section",
        "article",
        "header",
        "footer",
        "aside",
        "main",
        "nav",
      ],
      table: { category: "Element" },
    },
    children: {
      description: "The content to display inside the Box",
      control: "text",
      table: { category: "Element" },
    },
    className: {
      description: "Additional CSS classes",
      control: "text",
      table: { category: "Element" },
    },
    style: {
      description: "Additional inline styles",
      control: "object",
      table: { category: "Element" },
    },
    // Layout
    direction: {
      description: "Flex direction",
      control: "select",
      options: ["row", "column", "row-reverse", "column-reverse"],
      table: { category: "Layout" },
    },
    alignItems: {
      description: "Align items on the cross axis",
      control: "select",
      options: ["flex-start", "center", "flex-end", "stretch", "baseline"],
      table: { category: "Layout" },
    },
    justifyContent: {
      description: "Justify content on the main axis",
      control: "select",
      options: [
        "flex-start",
        "center",
        "flex-end",
        "space-between",
        "space-around",
        "space-evenly",
      ],
      table: { category: "Layout" },
    },
    alignSelf: {
      description: "Align self on the cross axis",
      control: "select",
      options: ["flex-start", "center", "flex-end", "stretch"],
      table: { category: "Layout" },
    },
    justifySelf: {
      description: "Justify self on the main axis",
      control: "select",
      options: ["flex-start", "center", "flex-end", "stretch"],
      table: { category: "Layout" },
    },
    // Spacing
    gap: {
      description: "Gap between children (token multiplier 1-12)",
      control: { type: "range", min: 1, max: 12, step: 1 },
      table: { category: "Spacing" },
    },
    padding: {
      description: "Padding on all sides (token multiplier 1-12)",
      control: { type: "range", min: 1, max: 12, step: 1 },
      table: { category: "Spacing" },
    },
    paddingBlock: {
      description: "Vertical padding (token multiplier 1-12)",
      control: { type: "range", min: 1, max: 12, step: 1 },
      table: { category: "Spacing" },
    },
    paddingInline: {
      description: "Horizontal padding (token multiplier 1-12)",
      control: { type: "range", min: 1, max: 12, step: 1 },
      table: { category: "Spacing" },
    },
    // Styling
    background: {
      description: "Background color from design tokens",
      control: "select",
      options: [
        undefined,
        "primary",
        "primary-subtle",
        "primary-bold",
        "secondary",
        "secondary-subtle",
        "secondary-bold",
        "accent",
        "accent-subtle",
        "accent-bold",
        "warning",
        "warning-subtle",
        "warning-bold",
        "positive",
        "positive-subtle",
        "positive-bold",
        "critical",
        "critical-subtle",
        "critical-bold",
        "neutral",
        "neutral-subtle",
        "neutral-bold",
      ],
      table: { category: "Styling" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  name: "Default",
  parameters: {
    docs: {
      description: {
        story:
          "Basic Box with padding. Use this as a starting point for simple container layouts.",
      },
    },
  },
  args: {
    children: "Box content",
    padding: 4,
  },
};

export const FlexDirection: Story = {
  name: "Flex Direction",
  parameters: {
    docs: {
      description: {
        story:
          "Control the main axis direction with the `direction` prop. Use `row` (default) for horizontal layouts, `column` for vertical stacking, and their `-reverse` variants to flip the order.",
      },
    },
  },
  render: () => (
    <Box direction="column" gap={6}>
      <Box direction="column" gap={2}>
        <Text variant="body-2" color="secondary">
          direction="row" (default)
        </Text>
        <Box direction="row" gap={4} padding={4} background="secondary">
          <Placeholder>1</Placeholder>
          <Placeholder>2</Placeholder>
          <Placeholder>3</Placeholder>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text variant="body-2" color="secondary">
          direction="column"
        </Text>
        <Box direction="column" gap={4} padding={4} background="secondary">
          <Placeholder>1</Placeholder>
          <Placeholder>2</Placeholder>
          <Placeholder>3</Placeholder>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text variant="body-2" color="secondary">
          direction="row-reverse"
        </Text>
        <Box direction="row-reverse" gap={4} padding={4} background="secondary">
          <Placeholder>1</Placeholder>
          <Placeholder>2</Placeholder>
          <Placeholder>3</Placeholder>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text variant="body-2" color="secondary">
          direction="column-reverse"
        </Text>
        <Box
          direction="column-reverse"
          gap={4}
          padding={4}
          background="secondary"
        >
          <Placeholder>1</Placeholder>
          <Placeholder>2</Placeholder>
          <Placeholder>3</Placeholder>
        </Box>
      </Box>
    </Box>
  ),
};

export const JustifyContent: Story = {
  name: "Justify Content",
  parameters: {
    docs: {
      description: {
        story:
          "Distribute items along the main axis with `justifyContent`. Use `space-between` for navigation bars, `center` for centered content, and `space-evenly` for equal spacing.",
      },
    },
  },
  render: () => (
    <Box direction="column" gap={6}>
      <Box direction="column" gap={2}>
        <Text variant="body-2" color="secondary">
          justifyContent="flex-start" (default)
        </Text>
        <Box
          justifyContent="flex-start"
          padding={4}
          background="secondary"
          style={{ minWidth: "400px" }}
        >
          <Placeholder>1</Placeholder>
          <Placeholder>2</Placeholder>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text variant="body-2" color="secondary">
          justifyContent="center"
        </Text>
        <Box
          justifyContent="center"
          padding={4}
          background="secondary"
          style={{ minWidth: "400px" }}
        >
          <Placeholder>1</Placeholder>
          <Placeholder>2</Placeholder>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text variant="body-2" color="secondary">
          justifyContent="flex-end"
        </Text>
        <Box
          justifyContent="flex-end"
          padding={4}
          background="secondary"
          style={{ minWidth: "400px" }}
        >
          <Placeholder>1</Placeholder>
          <Placeholder>2</Placeholder>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text variant="body-2" color="secondary">
          justifyContent="space-between"
        </Text>
        <Box
          justifyContent="space-between"
          padding={4}
          background="secondary"
          style={{ minWidth: "400px" }}
        >
          <Placeholder>1</Placeholder>
          <Placeholder>2</Placeholder>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text variant="body-2" color="secondary">
          justifyContent="space-around"
        </Text>
        <Box
          justifyContent="space-around"
          padding={4}
          background="secondary"
          style={{ minWidth: "400px" }}
        >
          <Placeholder>1</Placeholder>
          <Placeholder>2</Placeholder>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text variant="body-2" color="secondary">
          justifyContent="space-evenly"
        </Text>
        <Box
          justifyContent="space-evenly"
          padding={4}
          background="secondary"
          style={{ minWidth: "400px" }}
        >
          <Placeholder>1</Placeholder>
          <Placeholder>2</Placeholder>
        </Box>
      </Box>
    </Box>
  ),
};

export const AlignItems: Story = {
  name: "Align Items",
  parameters: {
    docs: {
      description: {
        story:
          "Align items along the cross axis with `alignItems`. Use `center` for vertical centering, `stretch` (default) for full-height children, and `baseline` for text alignment.",
      },
    },
  },
  render: () => (
    <Box direction="column" gap={6}>
      <Box direction="column" gap={2}>
        <Text variant="body-2" color="secondary">
          alignItems="flex-start"
        </Text>
        <Box
          alignItems="flex-start"
          gap={4}
          padding={4}
          background="secondary"
          style={{ minHeight: "100px" }}
        >
          <Placeholder>Short</Placeholder>
          <Placeholder style={{ height: "60px" }}>Tall</Placeholder>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text variant="body-2" color="secondary">
          alignItems="center"
        </Text>
        <Box
          alignItems="center"
          gap={4}
          padding={4}
          background="secondary"
          style={{ minHeight: "100px" }}
        >
          <Placeholder>Short</Placeholder>
          <Placeholder style={{ height: "60px" }}>Tall</Placeholder>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text variant="body-2" color="secondary">
          alignItems="flex-end"
        </Text>
        <Box
          alignItems="flex-end"
          gap={4}
          padding={4}
          background="secondary"
          style={{ minHeight: "100px" }}
        >
          <Placeholder>Short</Placeholder>
          <Placeholder style={{ height: "60px" }}>Tall</Placeholder>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text variant="body-2" color="secondary">
          alignItems="stretch" (default)
        </Text>
        <Box
          alignItems="stretch"
          gap={4}
          padding={4}
          background="secondary"
          style={{ minHeight: "100px" }}
        >
          <Placeholder>Short</Placeholder>
          <Placeholder style={{ height: "60px" }}>Tall</Placeholder>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text variant="body-2" color="secondary">
          alignItems="baseline"
        </Text>
        <Box
          alignItems="baseline"
          gap={4}
          padding={4}
          background="secondary"
          style={{ minHeight: "100px" }}
        >
          <Placeholder>
            <Text variant="body-1">Body</Text>
          </Placeholder>
          <Placeholder>
            <Text variant="title-3">Title</Text>
          </Placeholder>
        </Box>
      </Box>
    </Box>
  ),
};

export const BackgroundColors: Story = {
  name: "Background Colors",
  parameters: {
    docs: {
      description: {
        story:
          "Apply semantic background colors from design tokens. Each color has base, `-subtle`, and `-bold` variants. Base colors are for primary use, `-subtle` for light backgrounds and containers, `-bold` for darker/saturated versions.",
      },
    },
  },
  render: () => (
    <Box direction="column" gap={6}>
      <Box direction="column" gap={2}>
        <Text variant="featured-3" as="h3">
          Primary
        </Text>
        <Box direction="column" gap={2}>
          <Box background="primary-subtle" padding={4}>
            <Text>primary-subtle — Light background variant</Text>
          </Box>
          <Box background="primary" padding={4}>
            <Text style={{ color: "white" }}>primary — Main actions and links</Text>
          </Box>
          <Box background="primary-bold" padding={4}>
            <Text style={{ color: "white" }}>primary-bold — Bold variant</Text>
          </Box>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text variant="featured-3" as="h3">
          Secondary
        </Text>
        <Box direction="column" gap={2}>
          <Box background="secondary-subtle" padding={4}>
            <Text>secondary-subtle — Light background variant</Text>
          </Box>
          <Box background="secondary" padding={4}>
            <Text style={{ color: "white" }}>secondary — Secondary elements</Text>
          </Box>
          <Box background="secondary-bold" padding={4}>
            <Text style={{ color: "white" }}>secondary-bold — Bold variant</Text>
          </Box>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text variant="featured-3" as="h3">
          Accent
        </Text>
        <Box direction="column" gap={2}>
          <Box background="accent-subtle" padding={4}>
            <Text>accent-subtle — Light background variant</Text>
          </Box>
          <Box background="accent" padding={4}>
            <Text style={{ color: "white" }}>accent — Highlights and accents</Text>
          </Box>
          <Box background="accent-bold" padding={4}>
            <Text style={{ color: "white" }}>accent-bold — Bold variant</Text>
          </Box>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text variant="featured-3" as="h3">
          Warning
        </Text>
        <Box direction="column" gap={2}>
          <Box background="warning-subtle" padding={4}>
            <Text>warning-subtle — Light background variant</Text>
          </Box>
          <Box background="warning" padding={4}>
            <Text>warning — Warning states</Text>
          </Box>
          <Box background="warning-bold" padding={4}>
            <Text>warning-bold — Bold variant</Text>
          </Box>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text variant="featured-3" as="h3">
          Positive
        </Text>
        <Box direction="column" gap={2}>
          <Box background="positive-subtle" padding={4}>
            <Text>positive-subtle — Light background variant</Text>
          </Box>
          <Box background="positive" padding={4}>
            <Text style={{ color: "white" }}>positive — Success states</Text>
          </Box>
          <Box background="positive-bold" padding={4}>
            <Text style={{ color: "white" }}>positive-bold — Bold variant</Text>
          </Box>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text variant="featured-3" as="h3">
          Critical
        </Text>
        <Box direction="column" gap={2}>
          <Box background="critical-subtle" padding={4}>
            <Text>critical-subtle — Light background variant</Text>
          </Box>
          <Box background="critical" padding={4}>
            <Text style={{ color: "white" }}>
              critical — Errors and destructive actions
            </Text>
          </Box>
          <Box background="critical-bold" padding={4}>
            <Text style={{ color: "white" }}>critical-bold — Bold variant</Text>
          </Box>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text variant="featured-3" as="h3">
          Neutral
        </Text>
        <Box direction="column" gap={2}>
          <Box background="neutral-subtle" padding={4}>
            <Text>neutral-subtle — Light background variant</Text>
          </Box>
          <Box background="neutral" padding={4}>
            <Text>neutral — Placeholders and muted backgrounds</Text>
          </Box>
          <Box background="neutral-bold" padding={4}>
            <Text style={{ color: "white" }}>neutral-bold — Bold variant</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  ),
};

export const LogicalPadding: Story = {
  name: "Logical Padding",
  parameters: {
    docs: {
      description: {
        story:
          "Use `paddingBlock` (vertical) and `paddingInline` (horizontal) for directional padding. These logical properties adapt to different writing modes and are recommended for internationalized UIs.",
      },
    },
  },
  render: () => (
    <Box direction="column" gap={6}>
      <Box direction="column" gap={2}>
        <Text variant="body-2" color="secondary">
          padding={4} (all sides)
        </Text>
        <Box padding={4} background="secondary">
          <Text style={{ color: "white" }}>16px on all sides</Text>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text variant="body-2" color="secondary">
          paddingBlock={8} paddingInline={4}
        </Text>
        <Box paddingBlock={8} paddingInline={4} background="secondary">
          <Text style={{ color: "white" }}>32px vertical, 16px horizontal</Text>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text variant="body-2" color="secondary">
          paddingBlock={2} paddingInline={8}
        </Text>
        <Box paddingBlock={2} paddingInline={8} background="secondary">
          <Text style={{ color: "white" }}>8px vertical, 32px horizontal</Text>
        </Box>
      </Box>
    </Box>
  ),
};

export const NestedBoxes: Story = {
  name: "Nested Boxes",
  parameters: {
    docs: {
      description: {
        story:
          "Boxes can be nested to create complex layouts. Each Box maintains its own flex context, allowing for sophisticated compositions with different directions and alignments.",
      },
    },
  },
  render: () => (
    <Box direction="column" gap={4} padding={4} background="secondary">
      <Box direction="row" gap={4} padding={4} background="primary">
        <Placeholder>Nested 1</Placeholder>
        <Placeholder>Nested 2</Placeholder>
      </Box>
      <Box direction="row" gap={4} padding={4} background="accent">
        <Placeholder>Nested 3</Placeholder>
        <Placeholder>Nested 4</Placeholder>
      </Box>
    </Box>
  ),
};

export const SemanticElements: Story = {
  name: "Semantic Elements",
  parameters: {
    docs: {
      description: {
        story:
          "Use semantic aliases for better HTML semantics without the `as` prop. `Section`, `Article`, `Header`, `Footer`, and `Aside` render the appropriate HTML elements while keeping all Box props.",
      },
    },
  },
  render: () => (
    <Box direction="column" gap={6}>
      <Box direction="column" gap={2}>
        <Text variant="body-2" color="secondary">
          {"<Section>"}
        </Text>
        <Section padding={4} background="secondary">
          <Text style={{ color: "white" }}>
            Renders as &lt;section&gt; — for thematic content groupings
          </Text>
        </Section>
      </Box>
      <Box direction="column" gap={2}>
        <Text variant="body-2" color="secondary">
          {"<Article>"}
        </Text>
        <Article padding={4} direction="column" gap={2} background="secondary">
          <Text as="h3" variant="featured-3" style={{ color: "white" }}>
            Article Title
          </Text>
          <Text style={{ color: "white" }}>
            Renders as &lt;article&gt; — for self-contained content like blog
            posts
          </Text>
        </Article>
      </Box>
      <Box direction="column" gap={2}>
        <Text variant="body-2" color="secondary">
          {"<Header>"}
        </Text>
        <Header padding={4} background="secondary">
          <Text style={{ color: "white" }}>
            Renders as &lt;header&gt; — for introductory content
          </Text>
        </Header>
      </Box>
      <Box direction="column" gap={2}>
        <Text variant="body-2" color="secondary">
          {"<Footer>"}
        </Text>
        <Footer padding={4} background="secondary">
          <Text style={{ color: "white" }}>
            Renders as &lt;footer&gt; — for footer content
          </Text>
        </Footer>
      </Box>
      <Box direction="column" gap={2}>
        <Text variant="body-2" color="secondary">
          {"<Aside>"}
        </Text>
        <Aside padding={4} background="secondary">
          <Text style={{ color: "white" }}>
            Renders as &lt;aside&gt; — for tangentially related content
          </Text>
        </Aside>
      </Box>
    </Box>
  ),
};

export const LayoutAliases: Story = {
  name: "Layout Aliases",
  parameters: {
    docs: {
      description: {
        story:
          'Use `Stack` and `Cluster` as semantic shortcuts for common layouts. Stack sets `direction="column"` for vertical stacking, while Cluster sets `direction="row"` for horizontal grouping.',
      },
    },
  },
  render: () => (
    <Box direction="column" gap={6}>
      <Box direction="column" gap={2}>
        <Text variant="body-2" color="secondary">
          {"<Stack>"} — vertical layout (direction="column")
        </Text>
        <Stack gap={4} padding={4} background="secondary">
          <Placeholder>Item 1</Placeholder>
          <Placeholder>Item 2</Placeholder>
          <Placeholder>Item 3</Placeholder>
        </Stack>
      </Box>
      <Box direction="column" gap={2}>
        <Text variant="body-2" color="secondary">
          {"<Cluster>"} — horizontal layout (direction="row")
        </Text>
        <Cluster gap={4} padding={4} background="secondary">
          <Placeholder>Item 1</Placeholder>
          <Placeholder>Item 2</Placeholder>
          <Placeholder>Item 3</Placeholder>
        </Cluster>
      </Box>
    </Box>
  ),
};
