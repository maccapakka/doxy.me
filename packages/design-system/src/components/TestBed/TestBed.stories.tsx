import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Playground/TestBed",
};

export default meta;

type Story = StoryObj;

export const HelloWorld: Story = {
  render: () => <div>hello world</div>,
};
