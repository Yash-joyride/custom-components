import React from "react";
import { NewOnBoardingStepStory } from "../index";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/New Onboard/Steps/All steps",
  component: NewOnBoardingStepStory,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const OnboardStep = () => (
  <NewOnBoardingStepStory></NewOnBoardingStepStory>
);
