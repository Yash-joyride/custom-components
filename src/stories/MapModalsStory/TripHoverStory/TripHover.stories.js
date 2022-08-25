import React from "react";
import { Trip_Hover_Modal } from "../MapModals";

// import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Map Modals/ Trip Hover",
  component: Trip_Hover_Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const TripHoverModal = () => (
  <Trip_Hover_Modal
    tripId="1"
    date="00/00/0000"
    riderName="John Kowalski"
    tripDistance="10KM"
    tripPayment="$5.00"
  />
);
