import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Tabs, { TabsProps } from "./Tabs";

export default {
  title: "Components/Tabs",
  component: Tabs,
} as Meta<typeof Tabs>;

const Template2: StoryFn<TabsProps> = (args) => <Tabs {...args} />;

export const Tab = Template2.bind({});
Tab.args = {
  label: "tabs",
  constrast: "dark",
  state: "default",
};
