import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import TextField from "./TextField";

export default {
  title: "ReactComponentLibrary/TextField",
  component: TextField,
} as Meta<typeof TextField>;

const Template1: StoryFn<typeof TextField> = (args) => <TextField {...args} />;

export const TextField1 = Template1.bind({});
TextField1.args = {
  label: "TextField",
  contrast: "light",
  size: "base",
};
