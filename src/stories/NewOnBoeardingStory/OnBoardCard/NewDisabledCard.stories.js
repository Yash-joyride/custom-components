import React from "react";
import { NewDisabledCard } from "../index";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/New Onboard/Cards/Disabled Card(step-3)",
  component: NewDisabledCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const OnboardDisableCard = () => <NewDisabledCard></NewDisabledCard>;
