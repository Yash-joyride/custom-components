import React from "react";
import Port from "./Port";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Vehicle Card/Port",
  component: Port,
};

export const Ports = () => <Port portNumber="PORT 4" freePort="Free Port" />;
