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

const meta: Meta<typeof Box> = {
  component: Box,
  title: "Components/Box",
  tags: ["autodocs"],
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
        "secondary",
        "accent",
        "warning",
        "positive",
        "critical",
        "neutral",
      ],
      table: { category: "Styling" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    children: "Box content",
    padding: 4,
  },
};

export const FlexColumn: Story = {
  args: {
    direction: "column",
    gap: 4,
    padding: 4,
  },
  render: (args) => (
    <Box {...args}>
      <Placeholder>Item 1</Placeholder>
      <Placeholder>Item 2</Placeholder>
      <Placeholder>Item 3</Placeholder>
    </Box>
  ),
};

export const FlexRow: Story = {
  args: {
    direction: "row",
    gap: 4,
    padding: 4,
  },
  render: (args) => (
    <Box {...args}>
      <Placeholder>Item 1</Placeholder>
      <Placeholder>Item 2</Placeholder>
      <Placeholder>Item 3</Placeholder>
    </Box>
  ),
};

export const Centered: Story = {
  args: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    background: "secondary",
  },
  render: (args) => (
    <Box {...args} style={{ minHeight: "200px" }}>
      <Placeholder>Centered content</Placeholder>
    </Box>
  ),
};

export const SpaceBetween: Story = {
  args: {
    justifyContent: "space-between",
    padding: 4,
  },
  render: (args) => (
    <Box {...args}>
      <Placeholder>Left</Placeholder>
      <Placeholder>Right</Placeholder>
    </Box>
  ),
};

export const WithBackground: Story = {
  args: {
    padding: 6,
    background: "primary",
  },
  render: (args) => (
    <Box {...args}>
      <span style={{ color: "white" }}>Primary background with padding</span>
    </Box>
  ),
};

export const AllBackgroundColors: Story = {
  render: () => (
    <Box direction="column" gap={4}>
      <Box background="primary" padding={4}>
        <span style={{ color: "white" }}>Primary</span>
      </Box>
      <Box background="secondary" padding={4}>
        <span style={{ color: "white" }}>Secondary</span>
      </Box>
      <Box background="accent" padding={4}>
        <span style={{ color: "white" }}>Accent</span>
      </Box>
      <Box background="warning" padding={4}>
        <span>Warning</span>
      </Box>
      <Box background="positive" padding={4}>
        <span style={{ color: "white" }}>Positive</span>
      </Box>
      <Box background="critical" padding={4}>
        <span style={{ color: "white" }}>Critical</span>
      </Box>
    </Box>
  ),
};

export const LogicalPadding: Story = {
  args: {
    paddingBlock: 8,
    paddingInline: 4,
    background: "secondary",
  },
  render: (args) => (
    <Box {...args}>
      <span style={{ color: "white" }}>
        paddingBlock: 8 (32px), paddingInline: 4 (16px)
      </span>
    </Box>
  ),
};

export const NestedBoxes: Story = {
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

// Semantic HTML aliases stories
export const SemanticSection: Story = {
  render: () => (
    <Section paddingBlock={8} background="secondary">
      <span style={{ color: "white" }}>
        This renders as a &lt;section&gt; element
      </span>
    </Section>
  ),
};

export const SemanticArticle: Story = {
  render: () => (
    <Article padding={6} direction="column" gap={4}>
      <h2 style={{ margin: 0 }}>Article Title</h2>
      <p style={{ margin: 0 }}>
        This renders as an &lt;article&gt; element, perfect for blog posts or
        content blocks.
      </p>
    </Article>
  ),
};

export const SemanticLayout: Story = {
  render: () => (
    <Box direction="column">
      <Header
        padding={4}
        justifyContent="space-between"
        alignItems="center"
        background="primary"
      >
        <span style={{ color: "white", fontWeight: "bold" }}>Logo</span>
        <Box gap={4}>
          <span style={{ color: "white" }}>Nav 1</span>
          <span style={{ color: "white" }}>Nav 2</span>
        </Box>
      </Header>
      <Box direction="row">
        <Aside
          padding={4}
          direction="column"
          gap={4}
          background="secondary"
          style={{ width: "200px" }}
        >
          <span style={{ color: "white" }}>Sidebar Item 1</span>
          <span style={{ color: "white" }}>Sidebar Item 2</span>
        </Aside>
        <Article padding={6} direction="column" gap={4} style={{ flex: 1 }}>
          <h1 style={{ margin: 0 }}>Main Content</h1>
          <p style={{ margin: 0 }}>
            This demonstrates a semantic page layout using Box aliases.
          </p>
        </Article>
      </Box>
      <Footer padding={4} justifyContent="center" background="secondary">
        <span style={{ color: "white" }}>© 2025 Doxy</span>
      </Footer>
    </Box>
  ),
};

// Layout alias stories
export const StackExample: Story = {
  render: () => (
    <Stack gap={4} padding={4} background="secondary">
      <Placeholder>Item 1</Placeholder>
      <Placeholder>Item 2</Placeholder>
      <Placeholder>Item 3</Placeholder>
    </Stack>
  ),
};

export const ClusterExample: Story = {
  render: () => (
    <Cluster gap={4} padding={4} background="secondary">
      <Placeholder>Item 1</Placeholder>
      <Placeholder>Item 2</Placeholder>
      <Placeholder>Item 3</Placeholder>
    </Cluster>
  ),
};
