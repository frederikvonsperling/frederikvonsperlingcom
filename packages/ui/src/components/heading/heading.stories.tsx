import type { Meta, StoryObj } from "@storybook/react";

import Heading from "./heading";
import { VStack } from "@styled-system/jsx";

const meta = {
  title: "components/Heading",
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
 * Heading H3
 */
export const HeadingH3: Story = {
  args: {
    children: "How to copy to clipboard in Javascript",
    element: "h3",
    size: "h3",
  },
};

export const AllHeadings: Story = {
  args: {
    children: "How to copy to clipboard in Javascript",
    element: "h1",
  },
  render: (args) => (
    <VStack gap={"8"} alignItems={"flex-start"}>
      <Heading {...args} size="h1" />
      <Heading {...args} size="h2" />
      <Heading {...args} size="h3" />
    </VStack>
  ),
};
