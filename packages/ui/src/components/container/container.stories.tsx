import type { Meta, StoryObj } from "@storybook/react";

import Container from "./container";
import { css } from "@styled-system/css";

const meta = {
  title: "components/Container",
  component: Container,
  tags: ["autodocs"],
  render: (args) => (
    <Container className={css({ bg: "offWhite.200" })} {...args} />
  ),
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
