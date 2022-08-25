import React from "react";
import { Custom_Tooltip } from "./Tooltip";

// import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Tooltip ",
  component: Custom_Tooltip,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const TooltipBottom = () => (
  <Custom_Tooltip title="Add" placement="bottom">
    <div style={{ display: "inline-flex", margin: "50px" }}>Bottom</div>
  </Custom_Tooltip>
);
export const TooltipTop = () => (
  <Custom_Tooltip title="Add" placement="top">
    <div style={{ display: "inline-flex", margin: "50px" }}>Top</div>
  </Custom_Tooltip>
);
export const TooltipLeft = () => (
  <Custom_Tooltip title="Add" placement="left">
    <div style={{ display: "inline-flex", margin: "50px" }}>Left</div>
  </Custom_Tooltip>
);
export const TooltipRight = () => (
  <Custom_Tooltip title="Add" placement="right">
    <div style={{ display: "inline-flex", margin: "50px" }}>Right</div>
  </Custom_Tooltip>
);
