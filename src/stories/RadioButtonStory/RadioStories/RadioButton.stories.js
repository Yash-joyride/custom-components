import React from "react";

// import { Button } from './Button';
import { ComponentRadio } from "..";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Radio Button/Radio Check",
  component: ComponentRadio,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const RadioComponent = () => <ComponentRadio />;
