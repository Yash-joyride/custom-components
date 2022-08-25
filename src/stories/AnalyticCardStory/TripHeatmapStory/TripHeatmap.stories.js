import React from "react";
import { TripHeatmapnew } from "../index";

// import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Analytic Card/Trip Heat Map",
  component: TripHeatmapnew,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const TripsHeatMap = () => <TripHeatmapnew></TripHeatmapnew>;
