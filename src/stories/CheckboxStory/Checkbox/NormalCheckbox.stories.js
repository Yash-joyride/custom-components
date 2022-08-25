import React from "react";

// import { Button } from './Button';
import { CheckboxActive, CheckboxDisabled } from "../Checkbox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Checkbox/Checkbox",
  component: CheckboxActive,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const ActiveCheckbox = () => <CheckboxActive label="Button" />;

export const DisabledCheckbox = () => <CheckboxDisabled label="Button" />;
