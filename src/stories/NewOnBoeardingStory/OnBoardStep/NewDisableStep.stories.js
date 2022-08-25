import React from "react";
import { NewDisableStep } from "../index";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/New Onboard/Steps/Disable Step",
  component: NewDisableStep,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const OnboardDisableCard = () => <NewDisableStep></NewDisableStep>;
