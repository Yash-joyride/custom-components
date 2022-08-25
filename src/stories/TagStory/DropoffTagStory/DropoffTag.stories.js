import React from "react";

// import { Button } from './Button';
import { TagDropoff } from "../tag";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Tags/Dropoff Tags",
  component: TagDropoff,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const DropoffTag = () => <TagDropoff />;
