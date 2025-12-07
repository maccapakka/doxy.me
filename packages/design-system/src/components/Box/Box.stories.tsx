import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Section, Article, Header, Footer, Aside } from "./Box";

const meta: Meta<typeof Box> = {
  component: Box,
  title: "Components/Box",
  tags: ["autodocs"],
  argTypes: {
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
    },
    direction: {
      description: "Flex direction",
      control: "select",
      options: ["row", "column", "row-reverse", "column-reverse"],
    },
    alignItems: {
      description: "Align items on the cross axis",
      control: "select",
      options: ["flex-start", "center", "flex-end", "stretch", "baseline"],
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
    },
    gap: {
      description: "Gap between children (token multiplier 1-12)",
      control: { type: "range", min: 1, max: 12, step: 1 },
    },
    padding: {
      description: "Padding on all sides (token multiplier 1-12)",
      control: { type: "range", min: 1, max: 12, step: 1 },
    },
    paddingBlock: {
      description: "Vertical padding (token multiplier 1-12)",
      control: { type: "range", min: 1, max: 12, step: 1 },
    },
    paddingInline: {
      description: "Horizontal padding (token multiplier 1-12)",
      control: { type: "range", min: 1, max: 12, step: 1 },
    },
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
      ],
    },
    children: {
      description: "The content to display inside the Box",
      control: "text",
    },
    className: {
      description: "Additional CSS classes",
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

/** Placeholder box for demos */
const PlaceholderBox = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      padding: "16px 24px",
      backgroundColor: "oklch(90% 0.02 260deg)",
      borderRadius: "4px",
      fontSize: "14px",
    }}
  >
    {children}
  </div>
);

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
      <PlaceholderBox>Item 1</PlaceholderBox>
      <PlaceholderBox>Item 2</PlaceholderBox>
      <PlaceholderBox>Item 3</PlaceholderBox>
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
      <PlaceholderBox>Item 1</PlaceholderBox>
      <PlaceholderBox>Item 2</PlaceholderBox>
      <PlaceholderBox>Item 3</PlaceholderBox>
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
      <PlaceholderBox>Centered content</PlaceholderBox>
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
      <PlaceholderBox>Left</PlaceholderBox>
      <PlaceholderBox>Right</PlaceholderBox>
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
        <PlaceholderBox>Nested 1</PlaceholderBox>
        <PlaceholderBox>Nested 2</PlaceholderBox>
      </Box>
      <Box direction="row" gap={4} padding={4} background="accent">
        <PlaceholderBox>Nested 3</PlaceholderBox>
        <PlaceholderBox>Nested 4</PlaceholderBox>
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
