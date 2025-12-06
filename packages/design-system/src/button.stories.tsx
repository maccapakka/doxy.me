import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Button",
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "The content to display inside the button",
      control: "text",
    },
    appName: {
      description: "The app name to display in the alert",
      control: "text",
    },
    className: {
      description: "Additional CSS classes",
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Click me",
    appName: "Storybook",
  },
};

export const WithCustomClass: Story = {
  args: {
    children: "Styled Button",
    appName: "Design System",
    className: "custom-button",
  },
};
