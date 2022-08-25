import React from "react";
import { NewCompleteCard } from "../index";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/New Onboard/Cards/Complete Card(step-1)",
  component: NewCompleteCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const OnboardCompleteCard = () => <NewCompleteCard></NewCompleteCard>;
