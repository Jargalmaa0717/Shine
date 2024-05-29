import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import TextArea from "./TextArea";

export default {
  title: "ReactComponentLibrary/TextArea",
  component: TextArea,
} as Meta<typeof TextArea>;

const Template1: StoryFn<typeof TextArea> = (args) => <TextArea {...args} />;

export const TextArea1 = Template1.bind({});
TextArea1.args = {
  label: "TextArea",
  contrast: "light",
  size: "base",
};
