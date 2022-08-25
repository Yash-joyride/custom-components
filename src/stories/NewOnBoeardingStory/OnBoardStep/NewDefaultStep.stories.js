import React from "react";
import { NewDefaultStep } from "../index";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/New Onboard/Steps/Default Step",
  component: NewDefaultStep,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const OnboardDefaultCard = () => <NewDefaultStep></NewDefaultStep>;
