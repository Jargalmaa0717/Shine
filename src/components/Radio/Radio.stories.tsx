import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Radio from "./Radio";

export default {
  title: "ReactComponentLibrary/Radio",
  component: Radio,
} as Meta<typeof Radio>;

const Template: StoryFn<typeof Radio> = (args) => <Radio {...args} />;

export const RadioExample = Template.bind({});
RadioExample.args = {
  contrast: "light",
  label: "Option 1",
};
