import React from "react";
import { Fleet_Filter } from "../CustomDropdownMenu";

// import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Custom Dropdown Menus/Fleet  Filters",
  component: Fleet_Filter,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const FleetFilter = () => (
  <Fleet_Filter
    arr={[
      {
        label: "Fleet 1",
        inactive: false,
      },
      {
        label: "Fleet 2",
        inactive: true,
      },
      {
        label: "Fleet 3",
        inactive: false,
      },
      {
        label: "Fleet 4",
        inactive: false,
      },
      {
        label: "Fleet 5",
        inactive: true,
      },
      {
        label: "Fleet 6",
        inactive: false,
      },
    ]}
  />
);
