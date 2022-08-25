import React from "react";
import { Vehicle_Filter } from "../CustomDropdownMenu";
import { CardCheckboxComponent } from "../../../Styled-Components/CustomDropdownMenus/CardCheckboxComponent";

// import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Custom Dropdown Menus/Vehicle  Filters",
  component: Vehicle_Filter,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const VehicleFilter = () => (
  <Vehicle_Filter
    arr={[
      {
        component: <CardCheckboxComponent />,
      },
      {
        component: <CardCheckboxComponent />,
      },
      {
        component: <CardCheckboxComponent />,
      },
      {
        component: <CardCheckboxComponent />,
      },
      {
        component: <CardCheckboxComponent />,
      },
      {
        component: <CardCheckboxComponent />,
      },
      {
        component: <CardCheckboxComponent />,
      },
      {
        component: <CardCheckboxComponent />,
      },
    ]}
  />
);
