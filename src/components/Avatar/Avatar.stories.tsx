import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Avatar from "./Avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
} as Meta<typeof Avatar>;

const Template: StoryFn<typeof Avatar> = (args) => <Avatar {...args} />;

export const Avatars = Template.bind({});
Avatars.args = {
  label: "AA",
  contrast: "dark",
  type: "rounded",
  size: "large",
  content: "letters",
};

export const AvatarWithImage = Template.bind({});
AvatarWithImage.args = {
  label: "User",
  contrast: "dark",
  type: "rounded",
  size: "large",
  content: "image",
  src: "https://www.example.com/avatar.jpg", // Replace with a valid image URL
};
