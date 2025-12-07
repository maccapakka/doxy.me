import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text, Title, Heading, Caption } from "./Text";
import type { TextProps } from "./Text";
import { Box, Stack } from "../Box";

const meta: Meta<typeof Text> = {
  component: Text,
  title: "Components/Text",
  tags: ["autodocs"],
  argTypes: {
    // Element
    as: {
      description: "The element type to render",
      control: "select",
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
      description: "The content to display",
      control: "text",
      table: { category: "Element" },
    },
    className: {
      description: "Additional CSS classes",
      control: "text",
      table: { category: "Element" },
    },
    // Typography
    variant: {
      description: "Typography variant from design tokens",
      control: "select",
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
    // Styling
    color: {
      description: "Text color from design tokens",
      control: "select",
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
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
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
        <Stack key={variant} gap={1}>
          <Text variant="caption-1" color="secondary">
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
  render: () => (
    <Box direction="column" gap={2} padding={4} background="secondary">
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
    variant: "featured-1",
    color: "critical",
    children: "Error: Something went wrong!",
  },
};

export const PolymorphicRendering: Story = {
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
export const TitleAlias: Story = {
  render: () => (
    <Box direction="column" gap={4}>
      <Title variant="title-1">Page Title with Title alias</Title>
      <Title variant="title-2" color="primary">
        Colored Title
      </Title>
      <Title as="h1" variant="title-1">
        H1 Title
      </Title>
    </Box>
  ),
};

export const HeadingAlias: Story = {
  render: () => (
    <Box direction="column" gap={4}>
      <Heading variant="featured-1">Section Heading</Heading>
      <Heading variant="featured-2" color="accent">
        Accented Heading
      </Heading>
      <Heading as="h3" variant="title-3">
        H3 Heading
      </Heading>
    </Box>
  ),
};

export const CaptionAlias: Story = {
  render: () => (
    <Box direction="column" gap={2}>
      <Caption variant="caption-1">Image caption text</Caption>
      <Caption variant="caption-2" color="secondary">
        Secondary caption
      </Caption>
      <Caption variant="body-2" color="critical">
        Error message as caption
      </Caption>
    </Box>
  ),
};

export const TypographyHierarchy: Story = {
  render: () => (
    <Box direction="column" gap={6} padding={6}>
      <Title as="h1" variant="title-1">
        Welcome to Our Platform
      </Title>
      <Text variant="featured-1" color="secondary">
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
        <Caption variant="caption-1" color="secondary">
          Last updated: December 2025
        </Caption>
      </Box>
    </Box>
  ),
};

export const FormLabels: Story = {
  render: () => (
    <Box direction="column" gap={4}>
      <Box direction="column" gap={1}>
        <Text as="label" variant="body-2">
          Email Address
        </Text>
        <input
          type="email"
          placeholder="you@example.com"
          style={{ padding: "8px", fontSize: "16px" }}
        />
        <Caption variant="caption-1" color="secondary">
          We&apos;ll never share your email.
        </Caption>
      </Box>
      <Box direction="column" gap={1}>
        <Text as="label" variant="body-2">
          Password
        </Text>
        <input
          type="password"
          placeholder="••••••••"
          style={{ padding: "8px", fontSize: "16px" }}
        />
        <Caption variant="caption-1" color="critical">
          Password must be at least 8 characters.
        </Caption>
      </Box>
    </Box>
  ),
};

export const ErrorStates: Story = {
  render: () => (
    <Box direction="column" gap={4}>
      <Box direction="column" gap={1}>
        <Text variant="featured-2" color="critical">
          Error: Invalid credentials
        </Text>
        <Text variant="body-1" color="critical">
          Please check your email and password and try again.
        </Text>
      </Box>
      <Box direction="column" gap={1}>
        <Text variant="featured-2" color="positive">
          Success!
        </Text>
        <Text variant="body-1" color="positive">
          Your account has been created successfully.
        </Text>
      </Box>
      <Box direction="column" gap={1}>
        <Text variant="featured-2" color="warning">
          Warning
        </Text>
        <Text variant="body-1" color="warning">
          Your session will expire in 5 minutes.
        </Text>
      </Box>
    </Box>
  ),
};
