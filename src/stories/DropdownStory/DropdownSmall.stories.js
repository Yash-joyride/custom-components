import React from "react";

// import { Button } from './Button';
import { ComponentDropdownSmall } from "./Dropdown";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Dropdown/Dropdown",
  component: ComponentDropdownSmall,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const DropdownSmallSelect = () => <ComponentDropdownSmall />;

// export const DisabledCheckbox = () => <CheckboxDisabled label="Button" />;
