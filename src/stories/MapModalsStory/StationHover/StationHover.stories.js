import React from "react";
import { Station_Hover_Modal } from "../MapModals";

// import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Map Modals/ Station Hover",
  component: Station_Hover_Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const StationHoverModal = () => (
  <Station_Hover_Modal
    stationName="Station Name"
    labelName="RRT"
    vehiclesAvailable="2"
    portsAvailable="6"
  />
);
