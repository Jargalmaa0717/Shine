import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import StatusBadge from "./StatusBadge";

export default {
  title: "Components/StatusBadge",
  component: StatusBadge,
} as Meta<typeof StatusBadge>;

const Template2: StoryFn<typeof StatusBadge> = (args) => (
  <StatusBadge {...args} />
);

export const StatusBadgeXD = Template2.bind({});
StatusBadgeXD.args = {
  label: "Badge",
  constrast: "dark",
  color: "orchid",
};
