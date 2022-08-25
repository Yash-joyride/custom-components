import React from "react";

// import { Button } from './Button';
import { TagActive, TagAddActive } from "../tag";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Tags/Active Tags",
  component: TagActive,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const ActiveTag = () => <TagActive colour="rgba(6, 216, 90, 0.12)">Active</TagActive>;

export const AddActiveTag = () => <TagAddActive colour="rgba(6, 216, 90, 0.12)">Active</TagAddActive>;
