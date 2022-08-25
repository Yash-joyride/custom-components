import React from "react";
import { Small_Map_Pin_Slider, Medium_Map_Pin_Slider, Large_Map_Pin_Slider } from "./MapPins";

// import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Map Pins/Heatmap Pins Sliders",
  component: Small_Map_Pin_Slider,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const SmallMapPinSlider = () => <Small_Map_Pin_Slider />;
export const MediumMapPinSlider = () => <Medium_Map_Pin_Slider />;
export const LargeMapPinSlider = () => <Large_Map_Pin_Slider />;
