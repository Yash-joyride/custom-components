import React from "react";
import { Heat_Map_Filter } from "../CustomDropdownMenu";

// import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Custom Dropdown Menus/Heat Map Filters",
  component: Heat_Map_Filter,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const HeatMapFilter = () => <Heat_Map_Filter />;
