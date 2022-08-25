import React from "react";
import { Heatmap_Range_Slider, Labeled_Range_Slider, Range_Slider } from "./RangeSlider";

// import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Range Slider/Range Slider",
  component: Range_Slider,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const RangeSlider = () => <Range_Slider />;
export const LabeledRangeSlider = () => <Labeled_Range_Slider label="Hex Size" />;
export const HeatmapRangeSlider = () => <Heatmap_Range_Slider label="Total" min="<0" max="0>" />;
