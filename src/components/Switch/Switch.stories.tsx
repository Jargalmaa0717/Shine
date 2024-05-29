import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Switch from "./Switch";

export default {
  title: "ReactComponentLibrary/Switch",
  component: Switch,
} as Meta<typeof Switch>;

const Template: StoryFn<typeof Switch> = (args) => <Switch {...args} />;

export const SwitchExample = Template.bind({});
SwitchExample.args = {
  contrast: "light",
  label: "",
};
