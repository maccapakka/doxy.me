import type { Meta, StoryObj } from "@storybook/react-vite";
import { ExampleButton } from "./ExampleButton";

const meta: Meta<typeof ExampleButton> = {
  component: ExampleButton,
  title: "Components/ExampleButton",
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "The content to display inside the button",
      control: "text",
    },
    variant: {
      description: "The visual variant of the button",
      control: "select",
      options: ["primary", "secondary", "outline"],
    },
    size: {
      description: "The size of the button",
      control: "select",
      options: ["small", "medium", "large"],
    },
    disabled: {
      description: "Whether the button is disabled",
      control: "boolean",
    },
    onClick: {
      description: "Click handler",
      action: "clicked",
    },
    className: {
      description: "Additional CSS classes",
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ExampleButton>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
  },
};

export const Small: Story = {
  args: {
    children: "Small Button",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    children: "Medium Button",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    size: "large",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <ExampleButton variant="primary">Primary</ExampleButton>
      <ExampleButton variant="secondary">Secondary</ExampleButton>
      <ExampleButton variant="outline">Outline</ExampleButton>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <ExampleButton size="small">Small</ExampleButton>
      <ExampleButton size="medium">Medium</ExampleButton>
      <ExampleButton size="large">Large</ExampleButton>
    </div>
  ),
};

