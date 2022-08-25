import React from "react";
import { Add_Chart_Dropdown } from "../CustomDropdownMenu";
import { ChartCardComponent } from "../../../Styled-Components/CustomDropdownMenus/ChartCardComponent";
import CustomDropdownChartsIcon from "../../../Styled-Components/Icons/CustomDropdownChartsIcon";
// import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Custom Dropdown Menus/Add Chart Dropdown",
  component: Add_Chart_Dropdown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const VehicleFilter = () => (
  <Add_Chart_Dropdown
    arr={[
      {
        component: (
          <ChartCardComponent
            title="Chart Title"
            caption="Chart type caption"
            icon={<CustomDropdownChartsIcon />}
          />
        ),
      },
      {
        component: (
          <ChartCardComponent
            title="Chart Title"
            caption="Chart type caption"
            icon={<CustomDropdownChartsIcon />}
          />
        ),
      },
      {
        component: (
          <ChartCardComponent
            title="Chart Title"
            caption="Chart type caption"
            icon={<CustomDropdownChartsIcon />}
          />
        ),
      },
      {
        component: (
          <ChartCardComponent
            title="Chart Title"
            caption="Chart type caption"
            icon={<CustomDropdownChartsIcon />}
          />
        ),
      },
      {
        component: (
          <ChartCardComponent
            title="Chart Title"
            caption="Chart type caption"
            icon={<CustomDropdownChartsIcon />}
          />
        ),
      },
      {
        component: (
          <ChartCardComponent
            title="Chart Title"
            caption="Chart type caption"
            icon={<CustomDropdownChartsIcon />}
          />
        ),
      },
      {
        component: (
          <ChartCardComponent
            title="Chart Title"
            caption="Chart type caption"
            icon={<CustomDropdownChartsIcon />}
          />
        ),
      },
      {
        component: (
          <ChartCardComponent
            title="Chart Title"
            caption="Chart type caption"
            icon={<CustomDropdownChartsIcon />}
          />
        ),
      },
    ]}
  />
);
