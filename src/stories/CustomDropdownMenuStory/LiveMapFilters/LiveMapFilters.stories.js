import React from "react";
import { Live_Map_Filters_Advance_Filters, Live_Map_Filter } from "../CustomDropdownMenu";

// import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Custom Dropdown Menus/Live Map Filters",
  component: Live_Map_Filter,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const LiveMapFiltersAdvanceFilters = () => <Live_Map_Filters_Advance_Filters />;
export const LiveMapFilters = () => <Live_Map_Filter />;
