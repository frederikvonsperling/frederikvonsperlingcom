import type { Meta, StoryObj } from "@storybook/react";

import Badge from "./badge";
import { HStack } from "@styled-system/jsx";

const meta = {
  title: "components/Badge",
  component: Badge,
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Javascript",
  },
};

export const BadgeList: Story = {
  args: {
    children: "Javascript",
  },
  render: () => {
    return (
      <HStack maxW={"48"} flexWrap={"wrap"}>
        <Badge>React</Badge>
        <Badge>Vue</Badge>
        <Badge>Angular</Badge>
        <Badge>Ember</Badge>
        <Badge>Backbone</Badge>
        <Badge>jQuery</Badge>
        <Badge>Vanilla JS</Badge>
        <Badge>Typescript</Badge>
        <Badge>ES6</Badge>
      </HStack>
    );
  },
};
