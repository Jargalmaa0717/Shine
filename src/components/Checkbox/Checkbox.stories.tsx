import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Checkbox from "./Checkbox";

export default {
  title: "ReactComponentLibrary/Checkbox",
  component: Checkbox,
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const CheckboxExample = Template.bind({});
CheckboxExample.args = {
  contrast: "light",
  label: "Remember me",
};
