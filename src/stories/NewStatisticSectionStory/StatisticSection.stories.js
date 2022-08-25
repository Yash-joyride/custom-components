import React from "react";
import { Statistic_Component, Statistic_Section } from "./index";
import { CycleIcon } from "../../Styled-Components/Icons/CycleIcon";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/New Statistics Section/ New Statistics Section",
  component: Statistic_Component,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const StatisticComponent = () => <Statistic_Component heading="Total Trips" percentage="2.0%" stats={60} icon={<CycleIcon />} label="Trips Completed" />;

export const StatisticSection = () => <Statistic_Section />;
