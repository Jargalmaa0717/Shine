import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Badge from "./Badge";

export default {
  title: "Components/Badge",
  component: Badge,
} as Meta<typeof Badge>;

const Template1: StoryFn<typeof Badge> = (args) => <Badge {...args} />;

export const Badger = Template1.bind({});
Badger.args = {
  label: "Badge",
  constrast: "dark",
  size: "large",
  color: "success",
  radius: "default",
};
