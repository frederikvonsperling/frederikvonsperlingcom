import type { Meta, StoryObj } from "@storybook/react";

import { Heading } from "./Heading";

const meta = {
  title: "atoms/Heading",
  component: Heading,
  tags: ["autodocs"],
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Heading H1
 */
export const HeadingH1: Story = {
  args: {
    children: "How to copy to clipboard in Javascript",
    element: "h1",
    size: "h1",
  },
};

/**
 * Heading H2
 */
export const HeadingH2: Story = {
  args: {
    children: "How to copy to clipboard in Javascript",
    element: "h2",
    size: "h2",
  },
};

/**
 * Heading H2
 */
export const HeadingH3: Story = {
  args: {
    children: "How to copy to clipboard in Javascript",
    element: "h3",
    size: "h3",
  },
};
