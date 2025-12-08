import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";
import { Text } from "../Text";
import { Box, Cluster } from "../Box";
import { DotsIcon } from "../../icons/DotsIcon";
import { LayoutIcon } from "../../icons/LayoutIcon";
import { MicrophoneIcon } from "../../icons/MicrophoneIcon";

// Mock icon elements for stories
const StarIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <title>Star</title>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const SettingsIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Settings</title>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Button",
  tags: ["autodocs"],
  parameters: {
    docs: {
      subtitle: "A clickable element for user actions",
      description: {
        component:
          "Button is a versatile component supporting 3 variants (solid, outline, ghost), 4 colors (action, positive, critical, neutral), 3 sizes (small, medium, large), optional icons, icon-only mode, and full-width mode. All styles use design tokens for consistent theming.",
      },
    },
  },
  argTypes: {
    // Element
    children: {
      description:
        "The content to display inside the button (optional for icon-only buttons)",
      control: "text",
      table: { category: "Element" },
    },
    className: {
      description: "Additional CSS classes",
      control: "text",
      table: { category: "Element" },
    },
    // Styling
    color: {
      description: "The color of the button",
      control: "select",
      options: ["action", "positive", "critical", "neutral", "inherit"],
      table: { category: "Styling" },
    },
    variant: {
      description: "The visual variant of the button",
      control: "select",
      options: ["solid", "outline", "ghost"],
      table: { category: "Styling" },
    },
    size: {
      description: "The size of the button",
      control: "select",
      options: ["small", "medium", "large"],
      table: { category: "Styling" },
    },
    icon: {
      description: "Icon element to display before the label",
      control: false,
      table: { category: "Styling" },
    },
    fullWidth: {
      description: "Whether the button takes full container width",
      control: "boolean",
      table: { category: "Styling" },
    },
    // State
    disabled: {
      description: "Whether the button is disabled",
      control: "boolean",
      table: { category: "State" },
    },
    // Events
    onClick: {
      description: "Click handler",
      action: "clicked",
      table: { category: "Events" },
    },
    // Accessibility
    "aria-label": {
      description: "Accessible label for icon-only buttons",
      control: "text",
      table: { category: "Accessibility" },
    },
    // Advanced
    unstyledStates: {
      description:
        "Removes built-in hover, active, and focus visual styles for custom implementations",
      control: "boolean",
      table: { category: "Advanced" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  name: "Default",
  parameters: {
    docs: {
      description: {
        story: "The default button with action color and medium size.",
      },
    },
  },
  args: {
    children: "Button",
  },
};

export const AllColors: Story = {
  name: "Colors",
  parameters: {
    docs: {
      description: {
        story:
          "All 4 color options. Each color uses design tokens with automatic hover and active states via color-mix().",
      },
    },
  },
  render: () => (
    <Box direction="column" gap={4}>
      <Box gap={3} alignItems="center">
        <Button color="action">Action</Button>
        <Text variant="body-2">Primary actions (default)</Text>
      </Box>
      <Box gap={3} alignItems="center">
        <Button color="positive">Positive</Button>
        <Text variant="body-2">Success / confirmation actions</Text>
      </Box>
      <Box gap={3} alignItems="center">
        <Button color="critical">Critical</Button>
        <Text variant="body-2">Destructive / danger actions</Text>
      </Box>
      <Box gap={3} alignItems="center">
        <Button color="neutral">Neutral</Button>
        <Text variant="body-2">Muted / secondary actions</Text>
      </Box>
    </Box>
  ),
};

export const Variants: Story = {
  name: "Variants",
  parameters: {
    docs: {
      description: {
        story:
          "Three visual variants: solid (filled background), outline (transparent with border), and ghost (transparent without border). All support all colors.",
      },
    },
  },
  render: () => (
    <Box direction="column" gap={4}>
      <Text variant="featured-3" as="h3">
        Solid (default)
      </Text>
      <Box gap={3}>
        <Button variant="solid" color="action">
          Action
        </Button>
        <Button variant="solid" color="positive">
          Positive
        </Button>
        <Button variant="solid" color="critical">
          Critical
        </Button>
        <Button variant="solid" color="neutral">
          Neutral
        </Button>
      </Box>

      <Text variant="featured-3" as="h3">
        Outline
      </Text>
      <Box gap={3}>
        <Button variant="outline" color="action">
          Action
        </Button>
        <Button variant="outline" color="positive">
          Positive
        </Button>
        <Button variant="outline" color="critical">
          Critical
        </Button>
        <Button variant="outline" color="neutral">
          Neutral
        </Button>
      </Box>

      <Text variant="featured-3" as="h3">
        Ghost
      </Text>
      <Box gap={3}>
        <Button variant="ghost" color="action">
          Action
        </Button>
        <Button variant="ghost" color="positive">
          Positive
        </Button>
        <Button variant="ghost" color="critical">
          Critical
        </Button>
        <Button variant="ghost" color="neutral">
          Neutral
        </Button>
      </Box>
    </Box>
  ),
};

export const AllSizes: Story = {
  name: "Sizes",
  parameters: {
    docs: {
      description: {
        story:
          "All 3 sizes using typography and spacing tokens. Icons scale proportionally with text.",
      },
    },
  },
  render: () => (
    <Box direction="column" gap={4}>
      <Box gap={3} alignItems="center">
        <Button size="small">Small</Button>
        <Button size="small" icon={StarIcon}>
          With Icon
        </Button>
        <Text variant="body-2">Compact size</Text>
      </Box>
      <Box gap={3} alignItems="center">
        <Button size="medium">Medium</Button>
        <Button size="medium" icon={StarIcon}>
          With Icon
        </Button>
        <Text variant="body-2">Default size</Text>
      </Box>
      <Box gap={3} alignItems="center">
        <Button size="large">Large</Button>
        <Button size="large" icon={StarIcon}>
          With Icon
        </Button>
        <Text variant="body-2">Larger size</Text>
      </Box>
    </Box>
  ),
};

export const WithIcon: Story = {
  name: "With Icon",
  parameters: {
    docs: {
      description: {
        story:
          "Buttons with icons. The icon prop accepts a React element, and the Button controls its size via CSS (1em relative to font size).",
      },
    },
  },
  render: () => (
    <Box direction="column" gap={4}>
      <Box gap={3} alignItems="center">
        <Button icon={StarIcon}>Favorite</Button>
        <Button icon={SettingsIcon}>Settings</Button>
      </Box>
      <Box gap={3} alignItems="center">
        <Button color="positive" icon={StarIcon}>
          Save
        </Button>
        <Button color="critical" icon={SettingsIcon}>
          Delete
        </Button>
      </Box>
    </Box>
  ),
};

export const IconOnly: Story = {
  name: "Icon Only",
  parameters: {
    docs: {
      description: {
        story:
          "Icon-only buttons for compact actions. Use aria-label for accessibility. The button becomes square with aspect-ratio: 1.",
      },
    },
  },
  render: () => (
    <Box direction="column" gap={4}>
      <Text variant="featured-3" as="h3">
        All Sizes
      </Text>
      <Box gap={3} alignItems="center">
        <Button size="small" icon={StarIcon} aria-label="Favorite" />
        <Button size="medium" icon={StarIcon} aria-label="Favorite" />
        <Button size="large" icon={StarIcon} aria-label="Favorite" />
        <Text variant="body-2">Small, Medium, Large</Text>
      </Box>

      <Text variant="featured-3" as="h3">
        All Colors (Solid)
      </Text>
      <Box gap={3} alignItems="center">
        <Button icon={StarIcon} color="action" aria-label="Action" />
        <Button icon={StarIcon} color="positive" aria-label="Positive" />
        <Button icon={StarIcon} color="critical" aria-label="Critical" />
        <Button icon={StarIcon} color="neutral" aria-label="Neutral" />
      </Box>

      <Text variant="featured-3" as="h3">
        All Colors (Outline)
      </Text>
      <Box gap={3} alignItems="center">
        <Button
          variant="outline"
          icon={StarIcon}
          color="action"
          aria-label="Action"
        />
        <Button
          variant="outline"
          icon={StarIcon}
          color="positive"
          aria-label="Positive"
        />
        <Button
          variant="outline"
          icon={StarIcon}
          color="critical"
          aria-label="Critical"
        />
        <Button
          variant="outline"
          icon={StarIcon}
          color="neutral"
          aria-label="Neutral"
        />
      </Box>

      <Text variant="featured-3" as="h3">
        All Colors (Ghost)
      </Text>
      <Box gap={3} alignItems="center">
        <Button
          variant="ghost"
          icon={StarIcon}
          color="action"
          aria-label="Action"
        />
        <Button
          variant="ghost"
          icon={StarIcon}
          color="positive"
          aria-label="Positive"
        />
        <Button
          variant="ghost"
          icon={StarIcon}
          color="critical"
          aria-label="Critical"
        />
        <Button
          variant="ghost"
          icon={StarIcon}
          color="neutral"
          aria-label="Neutral"
        />
      </Box>

      <Text variant="featured-3" as="h3">
        Different Icons
      </Text>
      <Box gap={3} alignItems="center">
        <Button icon={StarIcon} aria-label="Favorite" />
        <Button icon={SettingsIcon} aria-label="Settings" />
        <Button icon={StarIcon} color="critical" aria-label="Remove favorite" />
        <Button
          icon={SettingsIcon}
          variant="outline"
          aria-label="Open settings"
        />
      </Box>
    </Box>
  ),
};

export const FullWidth: Story = {
  name: "Full Width",
  parameters: {
    docs: {
      description: {
        story: "Buttons that span the full width of their container.",
      },
    },
  },
  render: () => (
    <Box direction="column" gap={3} style={{ maxWidth: 400 }}>
      <Button fullWidth>Full Width Button</Button>
      <Button fullWidth color="positive" icon={StarIcon}>
        Full Width with Icon
      </Button>
      <Button fullWidth color="critical" size="large">
        Large Full Width
      </Button>
    </Box>
  ),
};

export const DisabledStates: Story = {
  name: "Disabled States",
  parameters: {
    docs: {
      description: {
        story:
          "Disabled buttons show reduced opacity and prevent interaction. Uses --dxy-color-disabled token.",
      },
    },
  },
  render: () => (
    <Box direction="column" gap={4}>
      <Text variant="featured-3" as="h3">
        Solid
      </Text>
      <Box gap={3} alignItems="center">
        <Button disabled>Disabled</Button>
        <Button disabled icon={StarIcon}>
          With Icon
        </Button>
      </Box>
      <Box gap={3} alignItems="center">
        <Button color="positive" disabled>
          Positive
        </Button>
        <Button color="critical" disabled>
          Critical
        </Button>
      </Box>

      <Text variant="featured-3" as="h3">
        Outline
      </Text>
      <Box gap={3} alignItems="center">
        <Button variant="outline" disabled>
          Disabled
        </Button>
        <Button variant="outline" disabled icon={StarIcon}>
          With Icon
        </Button>
      </Box>
      <Box gap={3} alignItems="center">
        <Button variant="outline" color="positive" disabled>
          Positive
        </Button>
        <Button variant="outline" color="critical" disabled>
          Critical
        </Button>
      </Box>

      <Text variant="featured-3" as="h3">
        Ghost
      </Text>
      <Box gap={3} alignItems="center">
        <Button variant="ghost" disabled>
          Disabled
        </Button>
        <Button variant="ghost" disabled icon={StarIcon}>
          With Icon
        </Button>
      </Box>
      <Box gap={3} alignItems="center">
        <Button variant="ghost" color="positive" disabled>
          Positive
        </Button>
        <Button variant="ghost" color="critical" disabled>
          Critical
        </Button>
      </Box>
    </Box>
  ),
};

export const ColorsBySize: Story = {
  name: "Colors by Size Matrix",
  parameters: {
    docs: {
      description: {
        story:
          "Complete matrix showing all colors across all sizes for both variants.",
      },
    },
  },
  render: () => (
    <Box direction="column" gap={6}>
      <Box direction="column" gap={4}>
        <Text variant="featured-2" as="h2">
          Solid
        </Text>
        <Text variant="featured-3" as="h3">
          Small
        </Text>
        <Box gap={2} style={{ flexWrap: "wrap" }}>
          <Button size="small" color="action">
            Action
          </Button>
          <Button size="small" color="positive">
            Positive
          </Button>
          <Button size="small" color="critical">
            Critical
          </Button>
          <Button size="small" color="neutral">
            Neutral
          </Button>
        </Box>

        <Text variant="featured-3" as="h3">
          Medium
        </Text>
        <Box gap={2} style={{ flexWrap: "wrap" }}>
          <Button size="medium" color="action">
            Action
          </Button>
          <Button size="medium" color="positive">
            Positive
          </Button>
          <Button size="medium" color="critical">
            Critical
          </Button>
          <Button size="medium" color="neutral">
            Neutral
          </Button>
        </Box>

        <Text variant="featured-3" as="h3">
          Large
        </Text>
        <Box gap={2} style={{ flexWrap: "wrap" }}>
          <Button size="large" color="action">
            Action
          </Button>
          <Button size="large" color="positive">
            Positive
          </Button>
          <Button size="large" color="critical">
            Critical
          </Button>
          <Button size="large" color="neutral">
            Neutral
          </Button>
        </Box>
      </Box>

      <Box direction="column" gap={4}>
        <Text variant="featured-2" as="h2">
          Outline
        </Text>
        <Text variant="featured-3" as="h3">
          Small
        </Text>
        <Box gap={2} style={{ flexWrap: "wrap" }}>
          <Button variant="outline" size="small" color="action">
            Action
          </Button>
          <Button variant="outline" size="small" color="positive">
            Positive
          </Button>
          <Button variant="outline" size="small" color="critical">
            Critical
          </Button>
          <Button variant="outline" size="small" color="neutral">
            Neutral
          </Button>
        </Box>

        <Text variant="featured-3" as="h3">
          Medium
        </Text>
        <Box gap={2} style={{ flexWrap: "wrap" }}>
          <Button variant="outline" size="medium" color="action">
            Action
          </Button>
          <Button variant="outline" size="medium" color="positive">
            Positive
          </Button>
          <Button variant="outline" size="medium" color="critical">
            Critical
          </Button>
          <Button variant="outline" size="medium" color="neutral">
            Neutral
          </Button>
        </Box>

        <Text variant="featured-3" as="h3">
          Large
        </Text>
        <Box gap={2} style={{ flexWrap: "wrap" }}>
          <Button variant="outline" size="large" color="action">
            Action
          </Button>
          <Button variant="outline" size="large" color="positive">
            Positive
          </Button>
          <Button variant="outline" size="large" color="critical">
            Critical
          </Button>
          <Button variant="outline" size="large" color="neutral">
            Neutral
          </Button>
        </Box>
      </Box>

      <Box direction="column" gap={4}>
        <Text variant="featured-2" as="h2">
          Ghost
        </Text>
        <Text variant="featured-3" as="h3">
          Small
        </Text>
        <Box gap={2} style={{ flexWrap: "wrap" }}>
          <Button variant="ghost" size="small" color="action">
            Action
          </Button>
          <Button variant="ghost" size="small" color="positive">
            Positive
          </Button>
          <Button variant="ghost" size="small" color="critical">
            Critical
          </Button>
          <Button variant="ghost" size="small" color="neutral">
            Neutral
          </Button>
        </Box>

        <Text variant="featured-3" as="h3">
          Medium
        </Text>
        <Box gap={2} style={{ flexWrap: "wrap" }}>
          <Button variant="ghost" size="medium" color="action">
            Action
          </Button>
          <Button variant="ghost" size="medium" color="positive">
            Positive
          </Button>
          <Button variant="ghost" size="medium" color="critical">
            Critical
          </Button>
          <Button variant="ghost" size="medium" color="neutral">
            Neutral
          </Button>
        </Box>

        <Text variant="featured-3" as="h3">
          Large
        </Text>
        <Box gap={2} style={{ flexWrap: "wrap" }}>
          <Button variant="ghost" size="large" color="action">
            Action
          </Button>
          <Button variant="ghost" size="large" color="positive">
            Positive
          </Button>
          <Button variant="ghost" size="large" color="critical">
            Critical
          </Button>
          <Button variant="ghost" size="large" color="neutral">
            Neutral
          </Button>
        </Box>
      </Box>
    </Box>
  ),
};

export const InheritColor: Story = {
  name: "Inherit Color (On Dark)",
  parameters: {
    docs: {
      description: {
        story:
          "The `inherit` color uses `currentColor` to inherit text color from the parent. Ideal for buttons on dark backgrounds where the text is white. Hover and active states use semi-transparent overlays.",
      },
    },
  },
  render: () => (
    <Box direction="column" gap={4}>
      <Text variant="featured-3" as="h3">
        Ghost Variant
      </Text>
      <Box
        background="black"
        borderRadius={3}
        padding={4}
        style={{ color: "white" }}
      >
        <Cluster gap={3}>
          <Button variant="ghost" color="inherit" icon={MicrophoneIcon}>
            Microphone
          </Button>
          <Button variant="ghost" color="inherit" icon={DotsIcon}>
            More
          </Button>
          <Button variant="ghost" color="inherit" icon={LayoutIcon}>
            Layout
          </Button>
        </Cluster>
      </Box>

      <Text variant="featured-3" as="h3">
        Outline Variant
      </Text>
      <Box
        background="black"
        borderRadius={3}
        padding={4}
        style={{ color: "white" }}
      >
        <Cluster gap={3}>
          <Button variant="outline" color="inherit" icon={MicrophoneIcon}>
            Microphone
          </Button>
          <Button variant="outline" color="inherit" icon={DotsIcon}>
            More
          </Button>
          <Button variant="outline" color="inherit" icon={LayoutIcon}>
            Layout
          </Button>
        </Cluster>
      </Box>

      <Text variant="featured-3" as="h3">
        Solid Variant
      </Text>
      <Box
        background="black"
        borderRadius={3}
        padding={4}
        style={{ color: "white" }}
      >
        <Cluster gap={3}>
          <Button variant="solid" color="inherit" icon={MicrophoneIcon}>
            Microphone
          </Button>
          <Button variant="solid" color="inherit" icon={DotsIcon}>
            More
          </Button>
          <Button variant="solid" color="inherit" icon={LayoutIcon}>
            Layout
          </Button>
        </Cluster>
      </Box>

      <Text variant="featured-3" as="h3">
        Icon Only
      </Text>
      <Box
        background="black"
        borderRadius={3}
        padding={4}
        style={{ color: "white" }}
      >
        <Cluster gap={3}>
          <Button
            variant="ghost"
            color="inherit"
            icon={MicrophoneIcon}
            aria-label="Microphone"
          />
          <Button
            variant="ghost"
            color="inherit"
            icon={DotsIcon}
            aria-label="More options"
          />
          <Button
            variant="ghost"
            color="inherit"
            icon={LayoutIcon}
            aria-label="Layout"
          />
        </Cluster>
      </Box>

      <Text variant="featured-3" as="h3">
        All Sizes
      </Text>
      <Box
        background="black"
        borderRadius={3}
        padding={4}
        style={{ color: "white" }}
      >
        <Cluster gap={3} alignItems="center">
          <Button variant="ghost" color="inherit" size="small">
            Small
          </Button>
          <Button variant="ghost" color="inherit" size="medium">
            Medium
          </Button>
          <Button variant="ghost" color="inherit" size="large">
            Large
          </Button>
        </Cluster>
      </Box>
    </Box>
  ),
};

export const UnstyledStates: Story = {
  name: "Unstyled States (Advanced)",
  parameters: {
    docs: {
      description: {
        story:
          "The `unstyledStates` prop removes built-in hover, active, and focus visual styles, allowing developers to implement custom state styles. Useful for advanced customization scenarios.",
      },
    },
  },
  render: () => (
    <Box direction="column" gap={4}>
      <Text variant="featured-3" as="h3">
        Default (with built-in state styles)
      </Text>
      <Box gap={3}>
        <Button>Hover me</Button>
        <Button variant="outline">Hover me</Button>
        <Button variant="ghost">Hover me</Button>
      </Box>

      <Text variant="featured-3" as="h3">
        With unstyledStates (no built-in state styles)
      </Text>
      <Box gap={3}>
        <Button unstyledStates>Hover me</Button>
        <Button unstyledStates variant="outline">
          Hover me
        </Button>
        <Button unstyledStates variant="ghost">
          Hover me
        </Button>
      </Box>

      <Text variant="body-2" style={{ maxWidth: 500 }}>
        Hover or focus the buttons above to compare. The bottom row has no
        visual feedback on hover/active/focus, allowing you to add custom styles
        via className.
      </Text>
    </Box>
  ),
};
