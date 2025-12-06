import type { Meta, StoryObj } from "@storybook/react-vite";
import { Code } from "./code";

const meta: Meta<typeof Code> = {
  component: Code,
  title: "Components/Code",
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "The code content to display",
      control: "text",
    },
    className: {
      description: "Additional CSS classes",
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Default: Story = {
  args: {
    children: "npm install @doxy/design-system",
  },
};

export const InlineCode: Story = {
  args: {
    children: "const x = 42;",
  },
};

export const WithCustomClass: Story = {
  args: {
    children: "pnpm dev",
    className: "highlight",
  },
};

