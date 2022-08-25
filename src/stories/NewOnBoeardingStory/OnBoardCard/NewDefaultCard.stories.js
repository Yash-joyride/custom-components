import React from "react";
import { NewDefaultCard } from "../index";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/New Onboard/Cards/Default Card(step-2)",
  component: NewDefaultCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const OnboardDefaultCard = () => <NewDefaultCard></NewDefaultCard>;
