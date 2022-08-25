import React from "react";
import Ports from "../Ports";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Vehicle Card/PortSlot",
  component: Ports,
};

export const PortSlot = () => (
  <Ports
    portNumber="PORT 1"
    vehicleName="Vehicle Name"
    precentage="80%"
    dateAndtime="00/00/0000 00:00 AM"
    name="John Kowalski"
  />
);
