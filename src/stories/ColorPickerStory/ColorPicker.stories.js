import React from "react";
import { Color_Picker } from "./ColorPicker";

// import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Color Picker/Color Picker",
  component: Color_Picker,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const ColorPicker = () => <Color_Picker />;
