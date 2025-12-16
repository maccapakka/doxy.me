import type { Meta, StoryObj } from "@storybook/react-vite";

import { Text } from "../Text";
import {
  Article,
  Aside,
  Box,
  Card,
  Cluster,
  Container,
  Footer,
  Header,
  Nav,
  Placeholder,
  Section,
  Stack,
} from "./Box";

const meta: Meta<typeof Box> = {
  argTypes: {
    alignItems: {
      control: "select",
      description: "Align items on the cross axis",
      options: ["flex-start", "center", "flex-end", "stretch", "baseline"],
      table: { category: "Layout" },
    },
    alignSelf: {
      control: "select",
      description: "Align self on the cross axis",
      options: ["flex-start", "center", "flex-end", "stretch"],
      table: { category: "Layout" },
    },
    // Element
    as: {
      control: "select",
      description: "The element type to render",
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
    aspectRatio: {
      control: "text",
      description: "Aspect ratio (CSS value, e.g. '16/9', '1', '4/3')",
      table: { category: "Styling" },
    },
    // Styling
    background: {
      control: "select",
      description: "Background color from design tokens",
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
        "black",
        "white",
        "elevation",
      ],
      table: { category: "Styling" },
    },
    // Background Image
    backgroundImage: {
      control: "text",
      description: "Background image URL",
      table: { category: "Background" },
    },
    backgroundPosition: {
      control: "text",
      description: "Background position (CSS value, e.g. 'center', 'top left')",
      table: { category: "Background" },
    },
    backgroundSize: {
      control: "select",
      description: "Background size (CSS value, e.g. 'cover', 'contain')",
      options: [undefined, "cover", "contain", "auto"],
      table: { category: "Background" },
    },
    borderRadius: {
      control: "select",
      description: "Border radius from design tokens or special values",
      options: [1, 2, 3, "circle"],
      table: { category: "Styling" },
    },
    children: {
      control: "text",
      description: "The content to display inside the Box",
      table: { category: "Element" },
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
      table: { category: "Element" },
    },
    cornerShape: {
      control: "select",
      description: "Corner shape style (CSS corner-shape property)",
      options: ["round", "scoop", "bevel", "notch", "squircle"],
      table: { category: "Styling" },
    },
    // Layout
    direction: {
      control: "select",
      description: "Flex direction",
      options: ["row", "column", "row-reverse", "column-reverse"],
      table: { category: "Layout" },
    },
    elevated: {
      control: "boolean",
      description: "Apply elevation styling (box shadow)",
      table: { category: "Styling" },
    },
    // Spacing
    gap: {
      control: { max: 12, min: 1, step: 1, type: "range" },
      description: "Gap between children (token multiplier 1-12)",
      table: { category: "Spacing" },
    },
    gridArea: {
      control: "text",
      description:
        "CSS grid-area value for placement in parent grid. Does not trigger grid display.",
      table: { category: "Grid" },
    },
    gridTemplateAreas: {
      control: "text",
      description:
        "CSS grid-template-areas value. Setting this triggers grid display mode.",
      table: { category: "Grid" },
    },
    // Grid
    gridTemplateColumns: {
      control: "text",
      description:
        "CSS grid-template-columns value. Setting this triggers grid display mode.",
      table: { category: "Grid" },
    },
    gridTemplateRows: {
      control: "text",
      description:
        "CSS grid-template-rows value. Setting this triggers grid display mode.",
      table: { category: "Grid" },
    },
    height: {
      control: "text",
      description: "Height of the box (CSS height value)",
      table: { category: "Styling" },
    },
    justifyContent: {
      control: "select",
      description: "Justify content on the main axis",
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
    justifySelf: {
      control: "select",
      description: "Justify self on the main axis",
      options: ["flex-start", "center", "flex-end", "stretch"],
      table: { category: "Layout" },
    },
    maxWidth: {
      control: "text",
      description: "Max width of the box (CSS max-width value)",
      table: { category: "Styling" },
    },
    padding: {
      control: { max: 12, min: 1, step: 1, type: "range" },
      description: "Padding on all sides (token multiplier 1-12)",
      table: { category: "Spacing" },
    },
    paddingBlock: {
      control: { max: 12, min: 1, step: 1, type: "range" },
      description: "Vertical padding (token multiplier 1-12)",
      table: { category: "Spacing" },
    },
    paddingInline: {
      control: { max: 12, min: 1, step: 1, type: "range" },
      description: "Horizontal padding (token multiplier 1-12)",
      table: { category: "Spacing" },
    },
    style: {
      control: "object",
      description: "Additional inline styles",
      table: { category: "Element" },
    },
    width: {
      control: "text",
      description: "Width of the box (CSS width value)",
      table: { category: "Styling" },
    },
  },
  component: Box,
  parameters: {
    docs: {
      description: {
        component:
          "Box is a foundational layout component that provides flexbox-based layouts with token-based spacing. It supports polymorphic rendering via the `as` prop, semantic HTML aliases (`Section`, `Article`, `Header`, `Footer`, `Aside`), and layout aliases (`Stack` for vertical, `Cluster` for horizontal layouts).",
      },
      subtitle: "A flexible layout primitive for building UI compositions",
    },
  },
  tags: ["autodocs"],
  title: "Components/Box",
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    children: "Box content",
    padding: 4,
  },
  name: "Default",
  parameters: {
    docs: {
      description: {
        story:
          "Basic Box with padding. Use this as a starting point for simple container layouts.",
      },
    },
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
        <Text color="secondary" variant="body-2">
          direction="row" (default)
        </Text>
        <Box background="secondary" direction="row" gap={4} padding={4}>
          <Placeholder>1</Placeholder>
          <Placeholder>2</Placeholder>
          <Placeholder>3</Placeholder>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          direction="column"
        </Text>
        <Box background="secondary" direction="column" gap={4} padding={4}>
          <Placeholder>1</Placeholder>
          <Placeholder>2</Placeholder>
          <Placeholder>3</Placeholder>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          direction="row-reverse"
        </Text>
        <Box background="secondary" direction="row-reverse" gap={4} padding={4}>
          <Placeholder>1</Placeholder>
          <Placeholder>2</Placeholder>
          <Placeholder>3</Placeholder>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          direction="column-reverse"
        </Text>
        <Box
          background="secondary"
          direction="column-reverse"
          gap={4}
          padding={4}
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
        <Text color="secondary" variant="body-2">
          justifyContent="flex-start" (default)
        </Text>
        <Box
          background="secondary"
          justifyContent="flex-start"
          padding={4}
          style={{ minWidth: "400px" }}
        >
          <Placeholder>1</Placeholder>
          <Placeholder>2</Placeholder>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          justifyContent="center"
        </Text>
        <Box
          background="secondary"
          justifyContent="center"
          padding={4}
          style={{ minWidth: "400px" }}
        >
          <Placeholder>1</Placeholder>
          <Placeholder>2</Placeholder>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          justifyContent="flex-end"
        </Text>
        <Box
          background="secondary"
          justifyContent="flex-end"
          padding={4}
          style={{ minWidth: "400px" }}
        >
          <Placeholder>1</Placeholder>
          <Placeholder>2</Placeholder>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          justifyContent="space-between"
        </Text>
        <Box
          background="secondary"
          justifyContent="space-between"
          padding={4}
          style={{ minWidth: "400px" }}
        >
          <Placeholder>1</Placeholder>
          <Placeholder>2</Placeholder>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          justifyContent="space-around"
        </Text>
        <Box
          background="secondary"
          justifyContent="space-around"
          padding={4}
          style={{ minWidth: "400px" }}
        >
          <Placeholder>1</Placeholder>
          <Placeholder>2</Placeholder>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          justifyContent="space-evenly"
        </Text>
        <Box
          background="secondary"
          justifyContent="space-evenly"
          padding={4}
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
        <Text color="secondary" variant="body-2">
          alignItems="flex-start"
        </Text>
        <Box
          alignItems="flex-start"
          background="secondary"
          gap={4}
          padding={4}
          style={{ minHeight: "100px" }}
        >
          <Placeholder>Short</Placeholder>
          <Placeholder style={{ height: "60px" }}>Tall</Placeholder>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          alignItems="center"
        </Text>
        <Box
          alignItems="center"
          background="secondary"
          gap={4}
          padding={4}
          style={{ minHeight: "100px" }}
        >
          <Placeholder>Short</Placeholder>
          <Placeholder style={{ height: "60px" }}>Tall</Placeholder>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          alignItems="flex-end"
        </Text>
        <Box
          alignItems="flex-end"
          background="secondary"
          gap={4}
          padding={4}
          style={{ minHeight: "100px" }}
        >
          <Placeholder>Short</Placeholder>
          <Placeholder style={{ height: "60px" }}>Tall</Placeholder>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          alignItems="stretch" (default)
        </Text>
        <Box
          alignItems="stretch"
          background="secondary"
          gap={4}
          padding={4}
          style={{ minHeight: "100px" }}
        >
          <Placeholder>Short</Placeholder>
          <Placeholder style={{ height: "60px" }}>Tall</Placeholder>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          alignItems="baseline"
        </Text>
        <Box
          alignItems="baseline"
          background="secondary"
          gap={4}
          padding={4}
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
        <Text as="h3" variant="featured-3">
          Primary
        </Text>
        <Box direction="column" gap={2}>
          <Box background="primary-subtle" padding={4}>
            <Text>primary-subtle — Light background variant</Text>
          </Box>
          <Box background="primary" padding={4}>
            <Text style={{ color: "white" }}>
              primary — Main actions and links
            </Text>
          </Box>
          <Box background="primary-bold" padding={4}>
            <Text style={{ color: "white" }}>primary-bold — Bold variant</Text>
          </Box>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text as="h3" variant="featured-3">
          Secondary
        </Text>
        <Box direction="column" gap={2}>
          <Box background="secondary-subtle" padding={4}>
            <Text>secondary-subtle — Light background variant</Text>
          </Box>
          <Box background="secondary" padding={4}>
            <Text style={{ color: "white" }}>
              secondary — Secondary elements
            </Text>
          </Box>
          <Box background="secondary-bold" padding={4}>
            <Text style={{ color: "white" }}>
              secondary-bold — Bold variant
            </Text>
          </Box>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text as="h3" variant="featured-3">
          Accent
        </Text>
        <Box direction="column" gap={2}>
          <Box background="accent-subtle" padding={4}>
            <Text>accent-subtle — Light background variant</Text>
          </Box>
          <Box background="accent" padding={4}>
            <Text style={{ color: "white" }}>
              accent — Highlights and accents
            </Text>
          </Box>
          <Box background="accent-bold" padding={4}>
            <Text style={{ color: "white" }}>accent-bold — Bold variant</Text>
          </Box>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text as="h3" variant="featured-3">
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
        <Text as="h3" variant="featured-3">
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
        <Text as="h3" variant="featured-3">
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
        <Text as="h3" variant="featured-3">
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
      <Box direction="column" gap={2}>
        <Text as="h3" variant="featured-3">
          Black & White
        </Text>
        <Box direction="column" gap={2}>
          <Box background="black" padding={4}>
            <Text style={{ color: "white" }}>black — Pure black</Text>
          </Box>
          <Box background="white" padding={4}>
            <Text>white — Pure white</Text>
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
        <Text color="secondary" variant="body-2">
          padding={4} (all sides)
        </Text>
        <Box background="secondary" padding={4}>
          <Text style={{ color: "white" }}>16px on all sides</Text>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          paddingBlock={8} paddingInline={4}
        </Text>
        <Box background="secondary" paddingBlock={8} paddingInline={4}>
          <Text style={{ color: "white" }}>32px vertical, 16px horizontal</Text>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          paddingBlock={2} paddingInline={8}
        </Text>
        <Box background="secondary" paddingBlock={2} paddingInline={8}>
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
    <Box background="secondary" direction="column" gap={4} padding={4}>
      <Box background="primary" direction="row" gap={4} padding={4}>
        <Placeholder>Nested 1</Placeholder>
        <Placeholder>Nested 2</Placeholder>
      </Box>
      <Box background="accent" direction="row" gap={4} padding={4}>
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
        <Text color="secondary" variant="body-2">
          {"<Section>"}
        </Text>
        <Section background="secondary" padding={4}>
          <Text style={{ color: "white" }}>
            Renders as &lt;section&gt; — for thematic content groupings
          </Text>
        </Section>
      </Box>
      <Box direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          {"<Article>"}
        </Text>
        <Article background="secondary" direction="column" gap={2} padding={4}>
          <Text as="h3" style={{ color: "white" }} variant="featured-3">
            Article Title
          </Text>
          <Text style={{ color: "white" }}>
            Renders as &lt;article&gt; — for self-contained content like blog
            posts
          </Text>
        </Article>
      </Box>
      <Box direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          {"<Header>"}
        </Text>
        <Header background="secondary" padding={4}>
          <Text style={{ color: "white" }}>
            Renders as &lt;header&gt; — for introductory content
          </Text>
        </Header>
      </Box>
      <Box direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          {"<Footer>"}
        </Text>
        <Footer background="secondary" padding={4}>
          <Text style={{ color: "white" }}>
            Renders as &lt;footer&gt; — for footer content
          </Text>
        </Footer>
      </Box>
      <Box direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          {"<Aside>"}
        </Text>
        <Aside background="secondary" padding={4}>
          <Text style={{ color: "white" }}>
            Renders as &lt;aside&gt; — for tangentially related content
          </Text>
        </Aside>
      </Box>
      <Box direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          {"<Nav>"}
        </Text>
        <Nav background="secondary" padding={4}>
          <Text style={{ color: "white" }}>
            Renders as &lt;nav&gt; — for navigation sections
          </Text>
        </Nav>
      </Box>
    </Box>
  ),
};

export const BorderRadius: Story = {
  name: "Border Radius",
  parameters: {
    docs: {
      description: {
        story:
          "Control border radius with a numeric scale. Use `1` (default, 4px), `2` (8px), or `3` (12px) for standard rounded corners. Use `circle` for circular elements.",
      },
    },
  },
  render: () => (
    <Box direction="row" gap={6}>
      <Box alignItems="center" direction="column" gap={2}>
        <Box
          alignItems="center"
          background="neutral-bold"
          borderRadius={1}
          height="120px"
          justifyContent="center"
          padding={6}
          width="120px"
        >
          <Text style={{ color: "white" }}>1</Text>
        </Box>
        <Text
          color="secondary"
          style={{ textAlign: "center" }}
          variant="body-2"
        >
          1 (4px, default)
        </Text>
      </Box>
      <Box alignItems="center" direction="column" gap={2}>
        <Box
          alignItems="center"
          background="neutral-bold"
          borderRadius={2}
          height="120px"
          justifyContent="center"
          padding={6}
          width="120px"
        >
          <Text style={{ color: "white" }}>2</Text>
        </Box>
        <Text
          color="secondary"
          style={{ textAlign: "center" }}
          variant="body-2"
        >
          2 (8px)
        </Text>
      </Box>
      <Box alignItems="center" direction="column" gap={2}>
        <Box
          alignItems="center"
          background="neutral-bold"
          borderRadius={3}
          height="120px"
          justifyContent="center"
          padding={6}
          width="120px"
        >
          <Text style={{ color: "white" }}>3</Text>
        </Box>
        <Text
          color="secondary"
          style={{ textAlign: "center" }}
          variant="body-2"
        >
          3 (12px)
        </Text>
      </Box>
      <Box alignItems="center" direction="column" gap={2}>
        <Box
          alignItems="center"
          background="neutral-bold"
          borderRadius="circle"
          height="120px"
          justifyContent="center"
          padding={6}
          width="120px"
        >
          <Text style={{ color: "white" }}>Circle</Text>
        </Box>
        <Text
          color="secondary"
          style={{ textAlign: "center" }}
          variant="body-2"
        >
          circle (9999px)
        </Text>
      </Box>
    </Box>
  ),
};

export const CornerShape: Story = {
  name: "Corner Shape",
  parameters: {
    docs: {
      description: {
        story:
          "Control corner shape style with the CSS corner-shape property. Use `round` (default) for standard rounded corners, `scoop` for inward curves, `bevel` for cut corners, `notch` for inverse bevels, or `squircle` for iOS-style superellipse curves. Works best with border-radius applied.",
      },
    },
  },
  render: () => (
    <Box direction="row" gap={6}>
      <Box alignItems="center" direction="column" gap={2}>
        <Box
          alignItems="center"
          background="neutral-bold"
          borderRadius={2}
          cornerShape="round"
          height="120px"
          justifyContent="center"
          padding={6}
          width="120px"
        >
          <Text style={{ color: "white" }}>Round</Text>
        </Box>
        <Text
          color="secondary"
          style={{ textAlign: "center" }}
          variant="body-2"
        >
          round (default)
        </Text>
      </Box>
      <Box alignItems="center" direction="column" gap={2}>
        <Box
          alignItems="center"
          background="neutral-bold"
          borderRadius={2}
          cornerShape="scoop"
          height="120px"
          justifyContent="center"
          padding={6}
          width="120px"
        >
          <Text style={{ color: "white" }}>Scoop</Text>
        </Box>
        <Text
          color="secondary"
          style={{ textAlign: "center" }}
          variant="body-2"
        >
          scoop
        </Text>
      </Box>
      <Box alignItems="center" direction="column" gap={2}>
        <Box
          alignItems="center"
          background="neutral-bold"
          borderRadius={2}
          cornerShape="bevel"
          height="120px"
          justifyContent="center"
          padding={6}
          width="120px"
        >
          <Text style={{ color: "white" }}>Bevel</Text>
        </Box>
        <Text
          color="secondary"
          style={{ textAlign: "center" }}
          variant="body-2"
        >
          bevel
        </Text>
      </Box>
      <Box alignItems="center" direction="column" gap={2}>
        <Box
          alignItems="center"
          background="neutral-bold"
          borderRadius={2}
          cornerShape="notch"
          height="120px"
          justifyContent="center"
          padding={6}
          width="120px"
        >
          <Text style={{ color: "white" }}>Notch</Text>
        </Box>
        <Text
          color="secondary"
          style={{ textAlign: "center" }}
          variant="body-2"
        >
          notch
        </Text>
      </Box>
      <Box alignItems="center" direction="column" gap={2}>
        <Box
          alignItems="center"
          background="neutral-bold"
          borderRadius={2}
          cornerShape="squircle"
          height="120px"
          justifyContent="center"
          padding={6}
          width="120px"
        >
          <Text style={{ color: "white" }}>Squircle</Text>
        </Box>
        <Text
          color="secondary"
          style={{ textAlign: "center" }}
          variant="body-2"
        >
          squircle
        </Text>
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
        <Text color="secondary" variant="body-2">
          {"<Stack>"} — vertical layout (direction="column")
        </Text>
        <Stack background="secondary" gap={4} padding={4}>
          <Placeholder>Item 1</Placeholder>
          <Placeholder>Item 2</Placeholder>
          <Placeholder>Item 3</Placeholder>
        </Stack>
      </Box>
      <Box direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          {"<Cluster>"} — horizontal layout (direction="row")
        </Text>
        <Cluster background="secondary" gap={4} padding={4}>
          <Placeholder>Item 1</Placeholder>
          <Placeholder>Item 2</Placeholder>
          <Placeholder>Item 3</Placeholder>
        </Cluster>
      </Box>
    </Box>
  ),
};

export const GridLayout: Story = {
  name: "Grid Layout",
  parameters: {
    docs: {
      description: {
        story:
          "Box automatically switches to CSS Grid when `gridTemplateColumns`, `gridTemplateRows`, or `gridTemplateAreas` props are provided. Use `gridArea` on child Boxes to place them in named areas.",
      },
    },
  },
  render: () => (
    <Box direction="column" gap={6}>
      <Box direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          gridTemplateColumns="1fr 1fr 1fr"
        </Text>
        <Box
          background="secondary"
          gap={4}
          gridTemplateColumns="1fr 1fr 1fr"
          padding={4}
        >
          <Placeholder>1</Placeholder>
          <Placeholder>2</Placeholder>
          <Placeholder>3</Placeholder>
          <Placeholder>4</Placeholder>
          <Placeholder>5</Placeholder>
          <Placeholder>6</Placeholder>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          gridTemplateColumns="200px 1fr 100px"
        </Text>
        <Box
          background="secondary"
          gap={4}
          gridTemplateColumns="200px 1fr 100px"
          padding={4}
        >
          <Placeholder>Fixed 200px</Placeholder>
          <Placeholder>Flexible</Placeholder>
          <Placeholder>Fixed 100px</Placeholder>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          gridTemplateColumns + gridTemplateRows
        </Text>
        <Box
          background="secondary"
          gap={4}
          gridTemplateColumns="1fr 1fr"
          gridTemplateRows="100px 150px"
          padding={4}
        >
          <Placeholder>Row 1</Placeholder>
          <Placeholder>Row 1</Placeholder>
          <Placeholder>Row 2 (taller)</Placeholder>
          <Placeholder>Row 2 (taller)</Placeholder>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          gridTemplateAreas with named regions
        </Text>
        <Box
          background="secondary"
          gap={4}
          gridTemplateAreas="'header header' 'sidebar main' 'footer footer'"
          gridTemplateColumns="200px 1fr"
          gridTemplateRows="auto 1fr auto"
          height="300px"
          padding={4}
        >
          <Box background="primary" gridArea="header" padding={4}>
            <Text style={{ color: "white" }}>Header</Text>
          </Box>
          <Box background="accent" gridArea="sidebar" padding={4}>
            <Text style={{ color: "white" }}>Sidebar</Text>
          </Box>
          <Box background="positive" gridArea="main" padding={4}>
            <Text style={{ color: "white" }}>Main Content</Text>
          </Box>
          <Box background="warning" gridArea="footer" padding={4}>
            <Text>Footer</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  ),
};

export const Elevated: Story = {
  name: "Elevated",
  parameters: {
    docs: {
      description: {
        story:
          'Apply elevation styling with the `elevated` prop. This adds a subtle box shadow. Combine with `background="elevation"` for a complete elevated surface look.',
      },
    },
  },
  render: () => (
    <Box background="neutral-subtle" direction="column" gap={6} padding={4}>
      <Box direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          elevated (shadow only)
        </Text>
        <Box elevated padding={4}>
          <Text>Elevated box with shadow</Text>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          elevated + background=&quot;elevation&quot;
        </Text>
        <Box background="elevation" elevated padding={4}>
          <Text>Elevated surface with white background and shadow</Text>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          elevated + borderRadius=&#123;2&#125;
        </Text>
        <Box background="elevation" borderRadius={2} elevated padding={4}>
          <Text>Elevated box with larger border radius</Text>
        </Box>
      </Box>
    </Box>
  ),
};

export const CardAlias: Story = {
  name: "Card Alias",
  parameters: {
    docs: {
      description: {
        story:
          'The `Card` alias is a pre-configured elevated Box with `background="elevation"` and `elevated` styling. Use it for card-like UI elements that need elevation.',
      },
    },
  },
  render: () => (
    <Box background="neutral-subtle" direction="column" gap={6} padding={4}>
      <Box direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          {"<Card>"}
        </Text>
        <Card>
          <Text>Card with default styling</Text>
        </Card>
      </Box>
    </Box>
  ),
};

export const ContainerAlias: Story = {
  name: "Container Alias",
  parameters: {
    docs: {
      description: {
        story:
          'The `Container` alias is a pre-configured Box for page-level centering. It has `width="100%"`, `maxWidth="1440px"`, and `paddingInline={6}` (24px horizontal padding).',
      },
    },
  },
  render: () => (
    <Box background="neutral-subtle" direction="column" gap={6}>
      <Box direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          {"<Container>"}
        </Text>
        <Container background="secondary" padding={4}>
          <Text style={{ color: "white" }}>
            Container with max-width 1440px and horizontal padding
          </Text>
        </Container>
      </Box>
    </Box>
  ),
};

export const BackgroundImage: Story = {
  name: "Background Image",
  parameters: {
    docs: {
      description: {
        story:
          "Use `backgroundImage` with `backgroundSize` and `backgroundPosition` to add background images. Common values: `cover` fills the container, `contain` fits within, and `center` positions the image.",
      },
    },
  },
  render: () => (
    <Box direction="column" gap={6}>
      <Box direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          backgroundSize=&quot;cover&quot; backgroundPosition=&quot;center&quot;
        </Text>
        <Box
          backgroundImage="https://picsum.photos/800/400"
          backgroundPosition="center"
          backgroundSize="cover"
          borderRadius={2}
          height="200px"
        />
      </Box>
      <Box direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          backgroundSize=&quot;contain&quot;
          backgroundPosition=&quot;center&quot;
        </Text>
        <Box
          background="neutral-subtle"
          backgroundImage="https://picsum.photos/400/400"
          backgroundPosition="center"
          backgroundSize="contain"
          borderRadius={2}
          height="200px"
          style={{ backgroundRepeat: "no-repeat" }}
        />
      </Box>
      <Box direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          Hero section with overlay content
        </Text>
        <Box
          alignItems="center"
          backgroundImage="https://picsum.photos/800/300"
          backgroundPosition="center"
          backgroundSize="cover"
          borderRadius={2}
          height="200px"
          justifyContent="center"
          padding={6}
        >
          <Text
            style={{ color: "white", textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
            variant="title-3"
          >
            Hero Title
          </Text>
        </Box>
      </Box>
    </Box>
  ),
};

export const AspectRatio: Story = {
  name: "Aspect Ratio",
  parameters: {
    docs: {
      description: {
        story:
          "Use `aspectRatio` to maintain consistent proportions. Common ratios: `16/9` for video, `4/3` for photos, `1` for squares. The aspect ratio is maintained regardless of content.",
      },
    },
  },
  render: () => (
    <Box direction="column" gap={6}>
      <Box direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          aspectRatio=&quot;16/9&quot; (video)
        </Text>
        <Box
          alignItems="center"
          aspectRatio="16/9"
          background="neutral-bold"
          borderRadius={2}
          justifyContent="center"
          width="300px"
        >
          <Text style={{ color: "white" }}>16:9</Text>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          aspectRatio=&quot;4/3&quot; (photo)
        </Text>
        <Box
          alignItems="center"
          aspectRatio="4/3"
          background="neutral-bold"
          borderRadius={2}
          justifyContent="center"
          width="300px"
        >
          <Text style={{ color: "white" }}>4:3</Text>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          aspectRatio=&quot;1&quot; (square)
        </Text>
        <Box
          alignItems="center"
          aspectRatio="1"
          background="neutral-bold"
          borderRadius={2}
          justifyContent="center"
          width="150px"
        >
          <Text style={{ color: "white" }}>1:1</Text>
        </Box>
      </Box>
      <Box direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          Aspect ratio with background image
        </Text>
        <Box
          aspectRatio="21/9"
          backgroundImage="https://picsum.photos/800/350"
          backgroundPosition="center"
          backgroundSize="cover"
          borderRadius={2}
          maxWidth="500px"
          width="100%"
        />
      </Box>
    </Box>
  ),
};
