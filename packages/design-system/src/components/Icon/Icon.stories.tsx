import type { Meta, StoryObj } from "@storybook/react-vite";

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
import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes",
      table: { category: "Element" },
    },
    color: {
      control: "select",
      description: "Color variant from design tokens",
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
    // Styling
    size: {
      control: { max: 20, min: 1, step: 1, type: "range" },
      description: "Size multiplier (multiplier of 4px, default: 6 = 24px)",
      table: { category: "Styling" },
    },
    style: {
      control: "object",
      description: "Additional inline styles",
      table: { category: "Element" },
    },
    // Element
    svg: {
      control: false,
      description: "The SVG element to render",
      table: { category: "Element" },
    },
  },
  component: Icon,
  parameters: {
    docs: {
      description: {
        component:
          "Icon wraps SVG elements with token-based sizing and coloring. It uses a multiplier-based sizing system (4px base) and provides color variants from the design system. The component maintains a 1:1 aspect ratio and works seamlessly with all icon assets.",
      },
      subtitle: "A wrapper component for consistent icon sizing and coloring",
    },
  },
  tags: ["autodocs"],
  title: "Components/Icon",
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    size: 6,
    svg: DotsIcon,
  },
  name: "Default",
  parameters: {
    docs: {
      description: {
        story:
          "Basic icon usage with default size (24px). Without a color prop, the icon inherits the current text color.",
      },
    },
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
      <Box alignItems="center" direction="column" gap={2}>
        <Icon color="primary" size={8} svg={DotsIcon} />
        <Text color="secondary" variant="body-2">
          Primary
        </Text>
      </Box>
      <Box alignItems="center" direction="column" gap={2}>
        <Icon color="secondary" size={8} svg={DotsIcon} />
        <Text color="secondary" variant="body-2">
          Secondary
        </Text>
      </Box>
      <Box alignItems="center" direction="column" gap={2}>
        <Icon color="accent" size={8} svg={DotsIcon} />
        <Text color="secondary" variant="body-2">
          Accent
        </Text>
      </Box>
      <Box alignItems="center" direction="column" gap={2}>
        <Icon color="warning" size={8} svg={DotsIcon} />
        <Text color="secondary" variant="body-2">
          Warning
        </Text>
      </Box>
      <Box alignItems="center" direction="column" gap={2}>
        <Icon color="positive" size={8} svg={DotsIcon} />
        <Text color="secondary" variant="body-2">
          Positive
        </Text>
      </Box>
      <Box alignItems="center" direction="column" gap={2}>
        <Icon color="critical" size={8} svg={DotsIcon} />
        <Text color="secondary" variant="body-2">
          Critical
        </Text>
      </Box>
      <Box alignItems="center" direction="column" gap={2}>
        <Icon color="neutral" size={8} svg={DotsIcon} />
        <Text color="secondary" variant="body-2">
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
      <Box alignItems="center" direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          3 (12px)
        </Text>
        <Icon color="primary" size={3} svg={SettingsIcon} />
      </Box>
      <Box alignItems="center" direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          4 (16px)
        </Text>
        <Icon color="primary" size={4} svg={SettingsIcon} />
      </Box>
      <Box alignItems="center" direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          6 (24px)
        </Text>
        <Icon color="primary" size={6} svg={SettingsIcon} />
      </Box>
      <Box alignItems="center" direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          8 (32px)
        </Text>
        <Icon color="primary" size={8} svg={SettingsIcon} />
      </Box>
      <Box alignItems="center" direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          10 (40px)
        </Text>
        <Icon color="primary" size={10} svg={SettingsIcon} />
      </Box>
      <Box alignItems="center" direction="column" gap={2}>
        <Text color="secondary" variant="body-2">
          12 (48px)
        </Text>
        <Icon color="primary" size={12} svg={SettingsIcon} />
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
      <Box alignItems="center" direction="column" gap={2}>
        <Icon color="primary" size={8} svg={ChatIcon} />
        <Text color="secondary" variant="caption-1">
          Chat
        </Text>
      </Box>
      <Box alignItems="center" direction="column" gap={2}>
        <Icon color="primary" size={8} svg={DotsIcon} />
        <Text color="secondary" variant="caption-1">
          Dots
        </Text>
      </Box>
      <Box alignItems="center" direction="column" gap={2}>
        <Icon color="primary" size={8} svg={LayoutIcon} />
        <Text color="secondary" variant="caption-1">
          Layout
        </Text>
      </Box>
      <Box alignItems="center" direction="column" gap={2}>
        <Icon color="primary" size={8} svg={MeetingCameraIcon} />
        <Text color="secondary" variant="caption-1">
          Camera
        </Text>
      </Box>
      <Box alignItems="center" direction="column" gap={2}>
        <Icon color="primary" size={8} svg={MeetingCameraOffIcon} />
        <Text color="secondary" variant="caption-1">
          Camera Off
        </Text>
      </Box>
      <Box alignItems="center" direction="column" gap={2}>
        <Icon color="primary" size={8} svg={MicrophoneIcon} />
        <Text color="secondary" variant="caption-1">
          Microphone
        </Text>
      </Box>
      <Box alignItems="center" direction="column" gap={2}>
        <Icon color="primary" size={8} svg={PhoneIcon} />
        <Text color="secondary" variant="caption-1">
          Phone
        </Text>
      </Box>
      <Box alignItems="center" direction="column" gap={2}>
        <Icon color="primary" size={8} svg={PhoneOffIcon} />
        <Text color="secondary" variant="caption-1">
          Phone Off
        </Text>
      </Box>
      <Box alignItems="center" direction="column" gap={2}>
        <Icon color="primary" size={8} svg={ReportIcon} />
        <Text color="secondary" variant="caption-1">
          Report
        </Text>
      </Box>
      <Box alignItems="center" direction="column" gap={2}>
        <Icon color="primary" size={8} svg={SettingsIcon} />
        <Text color="secondary" variant="caption-1">
          Settings
        </Text>
      </Box>
    </Box>
  ),
};
