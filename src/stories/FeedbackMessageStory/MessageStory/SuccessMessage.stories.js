import React from "react";
import { Feedbackmain } from "..";

// import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Feedback Message/Success Message",
  component: Feedbackmain,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const Successmessage = () => (
  <Feedbackmain messageNew="Success Message"></Feedbackmain>
);
