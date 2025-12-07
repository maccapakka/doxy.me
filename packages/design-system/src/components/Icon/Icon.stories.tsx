import type { Meta, StoryObj } from "@storybook/react-vite";
import { Icon } from "./Icon";
import { ChatIcon } from "../../icons/ChatIcon";
import { DotsIcon } from "../../icons/DotsIcon";
import { LayoutIcon } from "../../icons/LayoutIcon";
import { MeetingCameraIcon } from "../../icons/MeetingCameraIcon";
import { MeetingCameraOffIcon } from "../../icons/MeetingCameraOffIcon";
import { MicrophoneIcon } from "../../icons/MicrophoneIcon";
import { PhoneIcon } from "../../icons/PhoneIcon";
import { PhoneOffIcon } from "../../icons/PhoneOffIcon";
import { ReportIcon } from "../../icons/ReportIcon";
import { SettingsIcon } from "../../icons/SettingsIcon";
import { Box } from "../Box";
import { Text } from "../Text";

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: "Components/Icon",
  tags: ["autodocs"],
  parameters: {
    docs: {
      subtitle: "A wrapper component for consistent icon sizing and coloring",
      description: {
        component:
          "Icon wraps SVG elements with token-based sizing and coloring. It uses a multiplier-based sizing system (4px base) and provides color variants from the design system. The component maintains a 1:1 aspect ratio and works seamlessly with all icon assets.",
      },
    },
  },
  argTypes: {
    // Element
    svg: {
      description: "The SVG element to render",
      control: false,
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
    // Styling
    size: {
      description: "Size multiplier (multiplier of 4px, default: 6 = 24px)",
      control: { type: "range", min: 1, max: 20, step: 1 },
      table: { category: "Styling" },
    },
    color: {
      description: "Color variant from design tokens",
      control: "select",
      options: [
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
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  name: "Default",
  parameters: {
    docs: {
      description: {
        story:
          "Basic icon usage with default size (24px). Without a color prop, the icon inherits the current text color.",
      },
    },
  },
  args: {
    svg: DotsIcon,
    size: 6,
  },
};

export const ColorVariants: Story = {
  name: "Color Variants",
  parameters: {
    docs: {
      description: {
        story:
          "All seven color variants from the design system. Each color maps directly to a design token: primary (blue), secondary (slate), accent (violet), warning (amber), positive (green), critical (red), and neutral (light gray).",
      },
    },
  },
  render: () => (
    <Box direction="row" gap={6}>
      <Box direction="column" gap={2} alignItems="center">
        <Icon svg={DotsIcon} color="primary" size={8} />
        <Text variant="body-2" color="secondary">
          Primary
        </Text>
      </Box>
      <Box direction="column" gap={2} alignItems="center">
        <Icon svg={DotsIcon} color="secondary" size={8} />
        <Text variant="body-2" color="secondary">
          Secondary
        </Text>
      </Box>
      <Box direction="column" gap={2} alignItems="center">
        <Icon svg={DotsIcon} color="accent" size={8} />
        <Text variant="body-2" color="secondary">
          Accent
        </Text>
      </Box>
      <Box direction="column" gap={2} alignItems="center">
        <Icon svg={DotsIcon} color="warning" size={8} />
        <Text variant="body-2" color="secondary">
          Warning
        </Text>
      </Box>
      <Box direction="column" gap={2} alignItems="center">
        <Icon svg={DotsIcon} color="positive" size={8} />
        <Text variant="body-2" color="secondary">
          Positive
        </Text>
      </Box>
      <Box direction="column" gap={2} alignItems="center">
        <Icon svg={DotsIcon} color="critical" size={8} />
        <Text variant="body-2" color="secondary">
          Critical
        </Text>
      </Box>
      <Box direction="column" gap={2} alignItems="center">
        <Icon svg={DotsIcon} color="neutral" size={8} />
        <Text variant="body-2" color="secondary">
          Neutral
        </Text>
      </Box>
    </Box>
  ),
};

export const SizeScale: Story = {
  name: "Size Scale",
  parameters: {
    docs: {
      description: {
        story:
          "Common size multipliers based on the 4px spacing system. size={6} (24px) is the default and most common size for UI icons. Use smaller sizes for inline text icons, and larger sizes for feature illustrations.",
      },
    },
  },
  render: () => (
    <Box alignItems="flex-end" gap={6}>
      <Box direction="column" gap={2} alignItems="center">
        <Text variant="body-2" color="secondary">
          3 (12px)
        </Text>
        <Icon svg={SettingsIcon} color="primary" size={3} />
      </Box>
      <Box direction="column" gap={2} alignItems="center">
        <Text variant="body-2" color="secondary">
          4 (16px)
        </Text>
        <Icon svg={SettingsIcon} color="primary" size={4} />
      </Box>
      <Box direction="column" gap={2} alignItems="center">
        <Text variant="body-2" color="secondary">
          6 (24px)
        </Text>
        <Icon svg={SettingsIcon} color="primary" size={6} />
      </Box>
      <Box direction="column" gap={2} alignItems="center">
        <Text variant="body-2" color="secondary">
          8 (32px)
        </Text>
        <Icon svg={SettingsIcon} color="primary" size={8} />
      </Box>
      <Box direction="column" gap={2} alignItems="center">
        <Text variant="body-2" color="secondary">
          10 (40px)
        </Text>
        <Icon svg={SettingsIcon} color="primary" size={10} />
      </Box>
      <Box direction="column" gap={2} alignItems="center">
        <Text variant="body-2" color="secondary">
          12 (48px)
        </Text>
        <Icon svg={SettingsIcon} color="primary" size={12} />
      </Box>
    </Box>
  ),
};

export const IconLibrary: Story = {
  name: "Icon Library",
  parameters: {
    docs: {
      description: {
        story:
          "All available icons in the design system. Each icon is exported as a constant from the icons directory and can be passed to the Icon component's svg prop.",
      },
    },
  },
  render: () => (
    <Box gap={6} style={{ flexWrap: "wrap" }}>
      <Box direction="column" gap={2} alignItems="center">
        <Icon svg={ChatIcon} color="primary" size={8} />
        <Text variant="caption-1" color="secondary">
          Chat
        </Text>
      </Box>
      <Box direction="column" gap={2} alignItems="center">
        <Icon svg={DotsIcon} color="primary" size={8} />
        <Text variant="caption-1" color="secondary">
          Dots
        </Text>
      </Box>
      <Box direction="column" gap={2} alignItems="center">
        <Icon svg={LayoutIcon} color="primary" size={8} />
        <Text variant="caption-1" color="secondary">
          Layout
        </Text>
      </Box>
      <Box direction="column" gap={2} alignItems="center">
        <Icon svg={MeetingCameraIcon} color="primary" size={8} />
        <Text variant="caption-1" color="secondary">
          Camera
        </Text>
      </Box>
      <Box direction="column" gap={2} alignItems="center">
        <Icon svg={MeetingCameraOffIcon} color="primary" size={8} />
        <Text variant="caption-1" color="secondary">
          Camera Off
        </Text>
      </Box>
      <Box direction="column" gap={2} alignItems="center">
        <Icon svg={MicrophoneIcon} color="primary" size={8} />
        <Text variant="caption-1" color="secondary">
          Microphone
        </Text>
      </Box>
      <Box direction="column" gap={2} alignItems="center">
        <Icon svg={PhoneIcon} color="primary" size={8} />
        <Text variant="caption-1" color="secondary">
          Phone
        </Text>
      </Box>
      <Box direction="column" gap={2} alignItems="center">
        <Icon svg={PhoneOffIcon} color="primary" size={8} />
        <Text variant="caption-1" color="secondary">
          Phone Off
        </Text>
      </Box>
      <Box direction="column" gap={2} alignItems="center">
        <Icon svg={ReportIcon} color="primary" size={8} />
        <Text variant="caption-1" color="secondary">
          Report
        </Text>
      </Box>
      <Box direction="column" gap={2} alignItems="center">
        <Icon svg={SettingsIcon} color="primary" size={8} />
        <Text variant="caption-1" color="secondary">
          Settings
        </Text>
      </Box>
    </Box>
  ),
};
