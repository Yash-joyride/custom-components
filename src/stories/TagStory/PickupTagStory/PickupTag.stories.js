import React from "react";

// import { Button } from './Button';
import { TagPickup } from "../tag";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Tags/Pickup Tags",
  component: TagPickup,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const PickupTag = () => <TagPickup />;
