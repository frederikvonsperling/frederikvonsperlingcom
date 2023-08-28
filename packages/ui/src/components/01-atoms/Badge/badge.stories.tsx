import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "./Badge";

const meta = {
  title: "atoms/Badge",
  component: Badge,
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Heading H1
 */
export const HeadingH1: Story = {
  args: {
    children: "Javascript",
  },
};
