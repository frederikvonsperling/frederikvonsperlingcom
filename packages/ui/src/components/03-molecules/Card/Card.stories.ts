import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";

const meta = {
  title: "Molecules/Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "How to copy to clipboard in Javascript",
    excerpt: "Native function to copy content for the users clipboard",
    image: {
      srcSets: [
        {
          size: 100,
          src: "https://picsum.photos/100",
        },
      ],
      sizes: "100vw",
    },
    categories: ["Javascript", "Navigator"],
  },
};
