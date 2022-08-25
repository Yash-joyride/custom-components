import React from "react";

// import { Button } from './Button';
import { ComponentCheckbox } from "./Checkbox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Checkbox",
  component: ComponentCheckbox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const CheckboxComponent = () => <ComponentCheckbox />;
