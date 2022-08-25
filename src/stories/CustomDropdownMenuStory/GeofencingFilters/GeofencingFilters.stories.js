import React from "react";
import { Geofencing_Filter } from "../CustomDropdownMenu";

// import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Custom Dropdown Menus/Geofencing Filters",
  component: Geofencing_Filter,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const GeofencingFilter = () => <Geofencing_Filter />;
