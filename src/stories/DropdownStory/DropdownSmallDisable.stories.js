import React from "react";

// import { Button } from './Button';
import { ComponentDropdownSmallDisable } from "./Dropdown";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Dropdown/Dropdown",
  component: ComponentDropdownSmallDisable,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const DropdownSmallDisableSelect = () => <ComponentDropdownSmallDisable />;

// export const DisabledCheckbox = () => <CheckboxDisabled label="Button" />;
