import React from "react";

// import { Button } from './Button';
import { ComponentDropdownFormNotRequired } from "./Dropdown";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Dropdown/Dropdown",
  component: ComponentDropdownFormNotRequired,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const DropdownFormNotRequiredSelect = () => <ComponentDropdownFormNotRequired />;

// export const DisabledCheckbox = () => <CheckboxDisabled label="Button" />;
