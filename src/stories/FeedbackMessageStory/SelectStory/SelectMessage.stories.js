import React from "react";
import { Selectmain } from "..";

// import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Feedback Message/Select Message",
  component: Selectmain,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const Selectmessage = () => (
  <Selectmain messageNewMain="(5) Selected"></Selectmain>
);
