import React from "react";
import { Panelmain } from "../index";

// import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Modal/Modal Panel",
  component: Panelmain,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const panel = () => <Panelmain></Panelmain>;
