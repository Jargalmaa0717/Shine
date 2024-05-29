import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Tooltip from "./Tooltip";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
} as Meta<typeof Tooltip>;

const Template1: StoryFn<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const tooltiper = Template1.bind({});
tooltiper.args = {
  label: "tooltip",
  constrast: "dark",
  keystrokes: " + /",
};
