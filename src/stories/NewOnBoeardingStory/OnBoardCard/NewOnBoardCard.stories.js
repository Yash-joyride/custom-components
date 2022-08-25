import React from "react";
import { NewOnBoardingCardStory } from "../index";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/New Onboard/Cards/All cards",
  component: NewOnBoardingCardStory,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const OnboardCard = () => (
  <NewOnBoardingCardStory></NewOnBoardingCardStory>
);
