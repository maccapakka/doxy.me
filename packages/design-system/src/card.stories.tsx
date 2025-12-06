import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./card";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "Components/Card",
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "The title displayed in the card header",
      control: "text",
    },
    children: {
      description: "The content/description of the card",
      control: "text",
    },
    href: {
      description: "The URL the card links to",
      control: "text",
    },
    className: {
      description: "Additional CSS classes",
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Documentation",
    children: "Find in-depth information about the features and API.",
    href: "https://example.com/docs",
  },
};

export const LearnMore: Story = {
  args: {
    title: "Learn",
    children: "Learn about the project through interactive tutorials.",
    href: "https://example.com/learn",
  },
};

export const WithCustomClass: Story = {
  args: {
    title: "Styled Card",
    children: "A card with custom styling applied.",
    href: "https://example.com",
    className: "custom-card",
  },
};
