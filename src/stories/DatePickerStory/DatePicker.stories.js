import React from "react";
import { Date_Picker } from "./DatePicker";

// import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Date Picker/ DatePicker",
  component: Date_Picker,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const DatePicker = () => <Date_Picker />;
