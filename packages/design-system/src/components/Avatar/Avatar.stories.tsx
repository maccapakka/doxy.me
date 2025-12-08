import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "./Avatar";
import { Box } from "../Box";
import { Text } from "../Text";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: "Components/Avatar",
  tags: ["autodocs"],
  parameters: {
    docs: {
      subtitle: "Display user images or initials fallback",
      description: {
        component:
          "Avatar displays a user's profile image in a circular frame. When no image is available, it shows colored initials as a fallback. Uses the spacing token system for consistent sizing.",
      },
    },
  },
  argTypes: {
    // Element
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
    // Content
    src: {
      description: "Image URL to display",
      control: "text",
      table: { category: "Content" },
    },
    initials: {
      description: "Fallback text when no image is provided",
      control: "text",
      table: { category: "Content" },
    },
    // Styling
    size: {
      description: "Size multiplier (4px base, default 6 = 24px)",
      control: { type: "range", min: 4, max: 20 },
      table: { category: "Styling" },
    },
    color: {
      description: "Background color for initials fallback",
      control: "select",
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
    // State
    status: {
      description: "User presence status indicator",
      control: "select",
      options: [undefined, "online", "away", "offline"],
      table: { category: "State" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  name: "Default",
  parameters: {
    docs: {
      description: {
        story:
          "Default avatar with initials. Uses primary color background and default size (24px).",
      },
    },
  },
  args: {
    initials: "JD",
  },
};

export const WithImage: Story = {
  name: "With Image",
  parameters: {
    docs: {
      description: {
        story:
          "Avatar with an image source. The image is displayed in a circular frame with cover fit.",
      },
    },
  },
  args: {
    src: "/drew-cano.jpg",
    initials: "DC",
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
    <Box direction="row" alignItems="center" gap={4}>
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
        <Avatar initials="PR" color="primary" size={10} />
        <Text variant="caption-1">primary</Text>
      </Box>
      <Box alignItems="center" gap={2}>
        <Avatar initials="SC" color="secondary" size={10} />
        <Text variant="caption-1">secondary</Text>
      </Box>
      <Box alignItems="center" gap={2}>
        <Avatar initials="AC" color="accent" size={10} />
        <Text variant="caption-1">accent</Text>
      </Box>
      <Box alignItems="center" gap={2}>
        <Avatar initials="WR" color="warning" size={10} />
        <Text variant="caption-1">warning</Text>
      </Box>
      <Box alignItems="center" gap={2}>
        <Avatar initials="PS" color="positive" size={10} />
        <Text variant="caption-1">positive</Text>
      </Box>
      <Box alignItems="center" gap={2}>
        <Avatar initials="CR" color="critical" size={10} />
        <Text variant="caption-1">critical</Text>
      </Box>
      <Box alignItems="center" gap={2}>
        <Avatar initials="NT" color="neutral" size={10} />
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
        <Avatar src="/drew-cano.jpg" initials="DC" size={12} color="accent" />
        <Text variant="caption-1">Valid image</Text>
      </Box>
      <Box alignItems="center" gap={2}>
        <Avatar
          src="/non-existent.jpg"
          initials="NE"
          size={12}
          color="accent"
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
        <Avatar initials="ON" status="online" size={12} color="accent" />
        <Text variant="caption-1">online</Text>
      </Box>
      <Box alignItems="center" gap={2}>
        <Avatar initials="AW" status="away" size={12} color="accent" />
        <Text variant="caption-1">away</Text>
      </Box>
      <Box alignItems="center" gap={2}>
        <Avatar initials="OF" status="offline" size={12} color="accent" />
        <Text variant="caption-1">offline</Text>
      </Box>
      <Box alignItems="center" gap={2}>
        <Avatar initials="NS" size={12} color="accent" />
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
        <Avatar src="/drew-cano.jpg" initials="DC" status="online" size={14} />
        <Text variant="caption-1">Online</Text>
      </Box>
      <Box alignItems="center" gap={2}>
        <Avatar src="/drew-cano.jpg" initials="DC" status="away" size={14} />
        <Text variant="caption-1">Away</Text>
      </Box>
      <Box alignItems="center" gap={2}>
        <Avatar src="/drew-cano.jpg" initials="DC" status="offline" size={14} />
        <Text variant="caption-1">Offline</Text>
      </Box>
    </Box>
  ),
};
