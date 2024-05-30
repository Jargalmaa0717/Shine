import React from 'react';
import { StoryFn, Meta } from "@storybook/react";
import Iconbutton, { iconbuttonProps } from './Iconbutton';

export default {
    title: "Components/iconbutton",
    component: Iconbutton,
} as Meta<typeof Iconbutton>;

const Template2: StoryFn<iconbuttonProps> = (args) => <Iconbutton {...args} />;

export const Icon= Template2.bind({});
Icon.args = {
    label: "+",
    constrast: "dark",
    style: "primary",
    state: "default",
    size: "large",

};