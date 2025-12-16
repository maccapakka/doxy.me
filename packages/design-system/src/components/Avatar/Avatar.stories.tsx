import type { Meta, StoryObj } from "@storybook/react-vite";

import { Box } from "../Box";
import { Text } from "../Text";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  argTypes: {
    // Element
    className: {
      control: "text",
      description: "Additional CSS classes",
      table: { category: "Element" },
    },
    color: {
      control: "select",
      description: "Background color for initials fallback",
      options: [
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
    initials: {
      control: "text",
      description: "Fallback text when no image is provided",
      table: { category: "Content" },
    },
    // Styling
    size: {
      control: { max: 20, min: 4, type: "range" },
      description: "Size multiplier (4px base, default 6 = 24px)",
      table: { category: "Styling" },
    },
    // Content
    src: {
      control: "text",
      description: "Image URL to display",
      table: { category: "Content" },
    },
    // State
    status: {
      control: "select",
      description: "User presence status indicator",
      options: [undefined, "online", "away", "offline"],
      table: { category: "State" },
    },
    style: {
      control: "object",
      description: "Additional inline styles",
      table: { category: "Element" },
    },
  },
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component:
          "Avatar displays a user's profile image in a circular frame. When no image is available, it shows colored initials as a fallback. Uses the spacing token system for consistent sizing.",
      },
      subtitle: "Display user images or initials fallback",
    },
  },
  tags: ["autodocs"],
  title: "Components/Avatar",
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    initials: "JD",
  },
  name: "Default",
  parameters: {
    docs: {
      description: {
        story:
          "Default avatar with initials. Uses primary color background and default size (24px).",
      },
    },
  },
};

export const WithImage: Story = {
  args: {
    initials: "DC",
    src: "/drew-cano.jpg",
  },
  name: "With Image",
  parameters: {
    docs: {
      description: {
        story:
          "Avatar with an image source. The image is displayed in a circular frame with cover fit.",
      },
    },
  },
};

export const Sizes: Story = {
  name: "Sizes",
  parameters: {
    docs: {
      description: {
        story:
          "Avatar sizes use the spacing token system. Size is a multiplier of 4px (e.g., size=6 → 24px, size=10 → 40px).",
      },
    },
  },
  render: () => (
    <Box alignItems="center" direction="row" gap={4}>
      <Box alignItems="center" gap={2}>
        <Avatar initials="SM" size={6} />
        <Text variant="caption-1">6 (24px)</Text>
      </Box>
      <Box alignItems="center" gap={2}>
        <Avatar initials="MD" size={10} />
        <Text variant="caption-1">10 (40px)</Text>
      </Box>
      <Box alignItems="center" gap={2}>
        <Avatar initials="LG" size={14} />
        <Text variant="caption-1">14 (56px)</Text>
      </Box>
      <Box alignItems="center" gap={2}>
        <Avatar initials="XL" size={18} />
        <Text variant="caption-1">18 (72px)</Text>
      </Box>
    </Box>
  ),
};

export const Colors: Story = {
  name: "Background Colors",
  parameters: {
    docs: {
      description: {
        story:
          "When no image is provided, the color prop sets the background color. Initials are displayed in white.",
      },
    },
  },
  render: () => (
    <Box direction="row" gap={4} wrap="wrap">
      <Box alignItems="center" gap={2}>
        <Avatar color="primary" initials="PR" size={10} />
        <Text variant="caption-1">primary</Text>
      </Box>
      <Box alignItems="center" gap={2}>
        <Avatar color="secondary" initials="SC" size={10} />
        <Text variant="caption-1">secondary</Text>
      </Box>
      <Box alignItems="center" gap={2}>
        <Avatar color="accent" initials="AC" size={10} />
        <Text variant="caption-1">accent</Text>
      </Box>
      <Box alignItems="center" gap={2}>
        <Avatar color="warning" initials="WR" size={10} />
        <Text variant="caption-1">warning</Text>
      </Box>
      <Box alignItems="center" gap={2}>
        <Avatar color="positive" initials="PS" size={10} />
        <Text variant="caption-1">positive</Text>
      </Box>
      <Box alignItems="center" gap={2}>
        <Avatar color="critical" initials="CR" size={10} />
        <Text variant="caption-1">critical</Text>
      </Box>
      <Box alignItems="center" gap={2}>
        <Avatar color="neutral" initials="NT" size={10} />
        <Text variant="caption-1">neutral</Text>
      </Box>
    </Box>
  ),
};

export const ImageWithFallback: Story = {
  name: "Image with Fallback",
  parameters: {
    docs: {
      description: {
        story:
          "Always provide initials as a fallback. If the image fails to load, the colored initials will be visible.",
      },
    },
  },
  render: () => (
    <Box direction="row" gap={4}>
      <Box alignItems="center" gap={2}>
        <Avatar color="accent" initials="DC" size={12} src="/drew-cano.jpg" />
        <Text variant="caption-1">Valid image</Text>
      </Box>
      <Box alignItems="center" gap={2}>
        <Avatar
          color="accent"
          initials="NE"
          size={12}
          src="/non-existent.jpg"
        />
        <Text variant="caption-1">Invalid image</Text>
      </Box>
    </Box>
  ),
};

export const StatusIndicator: Story = {
  name: "Status Indicator",
  parameters: {
    docs: {
      description: {
        story:
          "The status prop displays a presence indicator in the bottom-right corner. Online status has a pulse animation, while away and offline are static.",
      },
    },
  },
  render: () => (
    <Box direction="row" gap={6}>
      <Box alignItems="center" gap={2}>
        <Avatar color="accent" initials="ON" size={12} status="online" />
        <Text variant="caption-1">online</Text>
      </Box>
      <Box alignItems="center" gap={2}>
        <Avatar color="accent" initials="AW" size={12} status="away" />
        <Text variant="caption-1">away</Text>
      </Box>
      <Box alignItems="center" gap={2}>
        <Avatar color="accent" initials="OF" size={12} status="offline" />
        <Text variant="caption-1">offline</Text>
      </Box>
      <Box alignItems="center" gap={2}>
        <Avatar color="accent" initials="NS" size={12} />
        <Text variant="caption-1">no status</Text>
      </Box>
    </Box>
  ),
};

export const StatusWithImage: Story = {
  name: "Status with Image",
  parameters: {
    docs: {
      description: {
        story:
          "Status indicators work with both image avatars and initials fallbacks.",
      },
    },
  },
  render: () => (
    <Box direction="row" gap={6}>
      <Box alignItems="center" gap={2}>
        <Avatar initials="DC" size={14} src="/drew-cano.jpg" status="online" />
        <Text variant="caption-1">Online</Text>
      </Box>
      <Box alignItems="center" gap={2}>
        <Avatar initials="DC" size={14} src="/drew-cano.jpg" status="away" />
        <Text variant="caption-1">Away</Text>
      </Box>
      <Box alignItems="center" gap={2}>
        <Avatar initials="DC" size={14} src="/drew-cano.jpg" status="offline" />
        <Text variant="caption-1">Offline</Text>
      </Box>
    </Box>
  ),
};
