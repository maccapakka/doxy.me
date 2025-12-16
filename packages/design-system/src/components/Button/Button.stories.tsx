import type { Meta, StoryObj } from "@storybook/react-vite";

import { DotsIcon } from "../../icons/DotsIcon";
import { LayoutIcon } from "../../icons/LayoutIcon";
import { MicrophoneIcon } from "../../icons/MicrophoneIcon";
import { Box, Cluster } from "../Box";
import { Text } from "../Text";
import { Button } from "./Button";

// Mock icon elements for stories
const StarIcon = (
  <svg
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Star</title>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const SettingsIcon = (
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Settings</title>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const meta: Meta<typeof Button> = {
  argTypes: {
    // Accessibility
    "aria-label": {
      control: "text",
      description: "Accessible label for icon-only buttons",
      table: { category: "Accessibility" },
    },
    // Element
    children: {
      control: "text",
      description:
        "The content to display inside the button (optional for icon-only buttons)",
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
      description: "The color of the button",
      options: ["action", "positive", "critical", "neutral", "inherit"],
      table: { category: "Styling" },
    },
    // State
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
      table: { category: "State" },
    },
    fullWidth: {
      control: "boolean",
      description: "Whether the button takes full container width",
      table: { category: "Styling" },
    },
    icon: {
      control: false,
      description: "Icon element to display before the label",
      table: { category: "Styling" },
    },
    // Events
    onClick: {
      action: "clicked",
      description: "Click handler",
      table: { category: "Events" },
    },
    size: {
      control: "select",
      description: "The size of the button",
      options: ["small", "medium", "large"],
      table: { category: "Styling" },
    },
    // Advanced
    unstyledStates: {
      control: "boolean",
      description:
        "Removes built-in hover, active, and focus visual styles for custom implementations",
      table: { category: "Advanced" },
    },
    variant: {
      control: "select",
      description: "The visual variant of the button",
      options: ["solid", "outline", "ghost"],
      table: { category: "Styling" },
    },
  },
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          "Button is a versatile component supporting 3 variants (solid, outline, ghost), 4 colors (action, positive, critical, neutral), 3 sizes (small, medium, large), optional icons, icon-only mode, and full-width mode. All styles use design tokens for consistent theming.",
      },
      subtitle: "A clickable element for user actions",
    },
  },
  tags: ["autodocs"],
  title: "Components/Button",
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
  },
  name: "Default",
  parameters: {
    docs: {
      description: {
        story: "The default button with action color and medium size.",
      },
    },
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
      <Box alignItems="center" gap={3}>
        <Button color="action">Action</Button>
        <Text variant="body-2">Primary actions (default)</Text>
      </Box>
      <Box alignItems="center" gap={3}>
        <Button color="positive">Positive</Button>
        <Text variant="body-2">Success / confirmation actions</Text>
      </Box>
      <Box alignItems="center" gap={3}>
        <Button color="critical">Critical</Button>
        <Text variant="body-2">Destructive / danger actions</Text>
      </Box>
      <Box alignItems="center" gap={3}>
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
      <Text as="h3" variant="featured-3">
        Solid (default)
      </Text>
      <Box gap={3}>
        <Button color="action" variant="solid">
          Action
        </Button>
        <Button color="positive" variant="solid">
          Positive
        </Button>
        <Button color="critical" variant="solid">
          Critical
        </Button>
        <Button color="neutral" variant="solid">
          Neutral
        </Button>
      </Box>

      <Text as="h3" variant="featured-3">
        Outline
      </Text>
      <Box gap={3}>
        <Button color="action" variant="outline">
          Action
        </Button>
        <Button color="positive" variant="outline">
          Positive
        </Button>
        <Button color="critical" variant="outline">
          Critical
        </Button>
        <Button color="neutral" variant="outline">
          Neutral
        </Button>
      </Box>

      <Text as="h3" variant="featured-3">
        Ghost
      </Text>
      <Box gap={3}>
        <Button color="action" variant="ghost">
          Action
        </Button>
        <Button color="positive" variant="ghost">
          Positive
        </Button>
        <Button color="critical" variant="ghost">
          Critical
        </Button>
        <Button color="neutral" variant="ghost">
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
      <Box alignItems="center" gap={3}>
        <Button size="small">Small</Button>
        <Button icon={StarIcon} size="small">
          With Icon
        </Button>
        <Text variant="body-2">Compact size</Text>
      </Box>
      <Box alignItems="center" gap={3}>
        <Button size="medium">Medium</Button>
        <Button icon={StarIcon} size="medium">
          With Icon
        </Button>
        <Text variant="body-2">Default size</Text>
      </Box>
      <Box alignItems="center" gap={3}>
        <Button size="large">Large</Button>
        <Button icon={StarIcon} size="large">
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
      <Box alignItems="center" gap={3}>
        <Button icon={StarIcon}>Favorite</Button>
        <Button icon={SettingsIcon}>Settings</Button>
      </Box>
      <Box alignItems="center" gap={3}>
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
      <Text as="h3" variant="featured-3">
        All Sizes
      </Text>
      <Box alignItems="center" gap={3}>
        <Button aria-label="Favorite" icon={StarIcon} size="small" />
        <Button aria-label="Favorite" icon={StarIcon} size="medium" />
        <Button aria-label="Favorite" icon={StarIcon} size="large" />
        <Text variant="body-2">Small, Medium, Large</Text>
      </Box>

      <Text as="h3" variant="featured-3">
        All Colors (Solid)
      </Text>
      <Box alignItems="center" gap={3}>
        <Button aria-label="Action" color="action" icon={StarIcon} />
        <Button aria-label="Positive" color="positive" icon={StarIcon} />
        <Button aria-label="Critical" color="critical" icon={StarIcon} />
        <Button aria-label="Neutral" color="neutral" icon={StarIcon} />
      </Box>

      <Text as="h3" variant="featured-3">
        All Colors (Outline)
      </Text>
      <Box alignItems="center" gap={3}>
        <Button
          aria-label="Action"
          color="action"
          icon={StarIcon}
          variant="outline"
        />
        <Button
          aria-label="Positive"
          color="positive"
          icon={StarIcon}
          variant="outline"
        />
        <Button
          aria-label="Critical"
          color="critical"
          icon={StarIcon}
          variant="outline"
        />
        <Button
          aria-label="Neutral"
          color="neutral"
          icon={StarIcon}
          variant="outline"
        />
      </Box>

      <Text as="h3" variant="featured-3">
        All Colors (Ghost)
      </Text>
      <Box alignItems="center" gap={3}>
        <Button
          aria-label="Action"
          color="action"
          icon={StarIcon}
          variant="ghost"
        />
        <Button
          aria-label="Positive"
          color="positive"
          icon={StarIcon}
          variant="ghost"
        />
        <Button
          aria-label="Critical"
          color="critical"
          icon={StarIcon}
          variant="ghost"
        />
        <Button
          aria-label="Neutral"
          color="neutral"
          icon={StarIcon}
          variant="ghost"
        />
      </Box>

      <Text as="h3" variant="featured-3">
        Different Icons
      </Text>
      <Box alignItems="center" gap={3}>
        <Button aria-label="Favorite" icon={StarIcon} />
        <Button aria-label="Settings" icon={SettingsIcon} />
        <Button aria-label="Remove favorite" color="critical" icon={StarIcon} />
        <Button
          aria-label="Open settings"
          icon={SettingsIcon}
          variant="outline"
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
      <Button color="positive" fullWidth icon={StarIcon}>
        Full Width with Icon
      </Button>
      <Button color="critical" fullWidth size="large">
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
      <Text as="h3" variant="featured-3">
        Solid
      </Text>
      <Box alignItems="center" gap={3}>
        <Button disabled>Disabled</Button>
        <Button disabled icon={StarIcon}>
          With Icon
        </Button>
      </Box>
      <Box alignItems="center" gap={3}>
        <Button color="positive" disabled>
          Positive
        </Button>
        <Button color="critical" disabled>
          Critical
        </Button>
      </Box>

      <Text as="h3" variant="featured-3">
        Outline
      </Text>
      <Box alignItems="center" gap={3}>
        <Button disabled variant="outline">
          Disabled
        </Button>
        <Button disabled icon={StarIcon} variant="outline">
          With Icon
        </Button>
      </Box>
      <Box alignItems="center" gap={3}>
        <Button color="positive" disabled variant="outline">
          Positive
        </Button>
        <Button color="critical" disabled variant="outline">
          Critical
        </Button>
      </Box>

      <Text as="h3" variant="featured-3">
        Ghost
      </Text>
      <Box alignItems="center" gap={3}>
        <Button disabled variant="ghost">
          Disabled
        </Button>
        <Button disabled icon={StarIcon} variant="ghost">
          With Icon
        </Button>
      </Box>
      <Box alignItems="center" gap={3}>
        <Button color="positive" disabled variant="ghost">
          Positive
        </Button>
        <Button color="critical" disabled variant="ghost">
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
        <Text as="h2" variant="featured-2">
          Solid
        </Text>
        <Text as="h3" variant="featured-3">
          Small
        </Text>
        <Box gap={2} style={{ flexWrap: "wrap" }}>
          <Button color="action" size="small">
            Action
          </Button>
          <Button color="positive" size="small">
            Positive
          </Button>
          <Button color="critical" size="small">
            Critical
          </Button>
          <Button color="neutral" size="small">
            Neutral
          </Button>
        </Box>

        <Text as="h3" variant="featured-3">
          Medium
        </Text>
        <Box gap={2} style={{ flexWrap: "wrap" }}>
          <Button color="action" size="medium">
            Action
          </Button>
          <Button color="positive" size="medium">
            Positive
          </Button>
          <Button color="critical" size="medium">
            Critical
          </Button>
          <Button color="neutral" size="medium">
            Neutral
          </Button>
        </Box>

        <Text as="h3" variant="featured-3">
          Large
        </Text>
        <Box gap={2} style={{ flexWrap: "wrap" }}>
          <Button color="action" size="large">
            Action
          </Button>
          <Button color="positive" size="large">
            Positive
          </Button>
          <Button color="critical" size="large">
            Critical
          </Button>
          <Button color="neutral" size="large">
            Neutral
          </Button>
        </Box>
      </Box>

      <Box direction="column" gap={4}>
        <Text as="h2" variant="featured-2">
          Outline
        </Text>
        <Text as="h3" variant="featured-3">
          Small
        </Text>
        <Box gap={2} style={{ flexWrap: "wrap" }}>
          <Button color="action" size="small" variant="outline">
            Action
          </Button>
          <Button color="positive" size="small" variant="outline">
            Positive
          </Button>
          <Button color="critical" size="small" variant="outline">
            Critical
          </Button>
          <Button color="neutral" size="small" variant="outline">
            Neutral
          </Button>
        </Box>

        <Text as="h3" variant="featured-3">
          Medium
        </Text>
        <Box gap={2} style={{ flexWrap: "wrap" }}>
          <Button color="action" size="medium" variant="outline">
            Action
          </Button>
          <Button color="positive" size="medium" variant="outline">
            Positive
          </Button>
          <Button color="critical" size="medium" variant="outline">
            Critical
          </Button>
          <Button color="neutral" size="medium" variant="outline">
            Neutral
          </Button>
        </Box>

        <Text as="h3" variant="featured-3">
          Large
        </Text>
        <Box gap={2} style={{ flexWrap: "wrap" }}>
          <Button color="action" size="large" variant="outline">
            Action
          </Button>
          <Button color="positive" size="large" variant="outline">
            Positive
          </Button>
          <Button color="critical" size="large" variant="outline">
            Critical
          </Button>
          <Button color="neutral" size="large" variant="outline">
            Neutral
          </Button>
        </Box>
      </Box>

      <Box direction="column" gap={4}>
        <Text as="h2" variant="featured-2">
          Ghost
        </Text>
        <Text as="h3" variant="featured-3">
          Small
        </Text>
        <Box gap={2} style={{ flexWrap: "wrap" }}>
          <Button color="action" size="small" variant="ghost">
            Action
          </Button>
          <Button color="positive" size="small" variant="ghost">
            Positive
          </Button>
          <Button color="critical" size="small" variant="ghost">
            Critical
          </Button>
          <Button color="neutral" size="small" variant="ghost">
            Neutral
          </Button>
        </Box>

        <Text as="h3" variant="featured-3">
          Medium
        </Text>
        <Box gap={2} style={{ flexWrap: "wrap" }}>
          <Button color="action" size="medium" variant="ghost">
            Action
          </Button>
          <Button color="positive" size="medium" variant="ghost">
            Positive
          </Button>
          <Button color="critical" size="medium" variant="ghost">
            Critical
          </Button>
          <Button color="neutral" size="medium" variant="ghost">
            Neutral
          </Button>
        </Box>

        <Text as="h3" variant="featured-3">
          Large
        </Text>
        <Box gap={2} style={{ flexWrap: "wrap" }}>
          <Button color="action" size="large" variant="ghost">
            Action
          </Button>
          <Button color="positive" size="large" variant="ghost">
            Positive
          </Button>
          <Button color="critical" size="large" variant="ghost">
            Critical
          </Button>
          <Button color="neutral" size="large" variant="ghost">
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
      <Text as="h3" variant="featured-3">
        Ghost Variant
      </Text>
      <Box
        background="black"
        borderRadius={3}
        padding={4}
        style={{ color: "white" }}
      >
        <Cluster gap={3}>
          <Button color="inherit" icon={MicrophoneIcon} variant="ghost">
            Microphone
          </Button>
          <Button color="inherit" icon={DotsIcon} variant="ghost">
            More
          </Button>
          <Button color="inherit" icon={LayoutIcon} variant="ghost">
            Layout
          </Button>
        </Cluster>
      </Box>

      <Text as="h3" variant="featured-3">
        Outline Variant
      </Text>
      <Box
        background="black"
        borderRadius={3}
        padding={4}
        style={{ color: "white" }}
      >
        <Cluster gap={3}>
          <Button color="inherit" icon={MicrophoneIcon} variant="outline">
            Microphone
          </Button>
          <Button color="inherit" icon={DotsIcon} variant="outline">
            More
          </Button>
          <Button color="inherit" icon={LayoutIcon} variant="outline">
            Layout
          </Button>
        </Cluster>
      </Box>

      <Text as="h3" variant="featured-3">
        Solid Variant
      </Text>
      <Box
        background="black"
        borderRadius={3}
        padding={4}
        style={{ color: "white" }}
      >
        <Cluster gap={3}>
          <Button color="inherit" icon={MicrophoneIcon} variant="solid">
            Microphone
          </Button>
          <Button color="inherit" icon={DotsIcon} variant="solid">
            More
          </Button>
          <Button color="inherit" icon={LayoutIcon} variant="solid">
            Layout
          </Button>
        </Cluster>
      </Box>

      <Text as="h3" variant="featured-3">
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
            aria-label="Microphone"
            color="inherit"
            icon={MicrophoneIcon}
            variant="ghost"
          />
          <Button
            aria-label="More options"
            color="inherit"
            icon={DotsIcon}
            variant="ghost"
          />
          <Button
            aria-label="Layout"
            color="inherit"
            icon={LayoutIcon}
            variant="ghost"
          />
        </Cluster>
      </Box>

      <Text as="h3" variant="featured-3">
        All Sizes
      </Text>
      <Box
        background="black"
        borderRadius={3}
        padding={4}
        style={{ color: "white" }}
      >
        <Cluster alignItems="center" gap={3}>
          <Button color="inherit" size="small" variant="ghost">
            Small
          </Button>
          <Button color="inherit" size="medium" variant="ghost">
            Medium
          </Button>
          <Button color="inherit" size="large" variant="ghost">
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
      <Text as="h3" variant="featured-3">
        Default (with built-in state styles)
      </Text>
      <Box gap={3}>
        <Button>Hover me</Button>
        <Button variant="outline">Hover me</Button>
        <Button variant="ghost">Hover me</Button>
      </Box>

      <Text as="h3" variant="featured-3">
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

      <Text style={{ maxWidth: 500 }} variant="body-2">
        Hover or focus the buttons above to compare. The bottom row has no
        visual feedback on hover/active/focus, allowing you to add custom styles
        via className.
      </Text>
    </Box>
  ),
};
