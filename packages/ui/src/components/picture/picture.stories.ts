import type { Meta, StoryObj } from "@storybook/react";

import Picture from "./picture";

const meta = {
  title: "components/Picture",
  component: Picture,
  tags: ["autodocs"],
} satisfies Meta<typeof Picture>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    srcSets: [
      {
        size: 100,
        src: "https://picsum.photos/100",
      },
      {
        size: 400,
        src: "https://picsum.photos/400",
      },
      {
        size: 1200,
        src: "https://picsum.photos/1200",
      },
    ],
  },
};
