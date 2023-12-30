import type { Meta, StoryObj } from "@storybook/react";

import { HStack } from "@styled-system/jsx";
import Box from "./box";
import { css } from "@styled-system/css";

const meta = {
  title: "components/Box",
  component: Box,
  tags: ["autodocs"],
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <p>Some content</p>,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
  render: (args) => <Box className={css({ minH: "20" })} {...args} />,
};
