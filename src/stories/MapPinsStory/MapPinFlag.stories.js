import React from "react";
import { Map_Pin_Lock } from "./MapPins";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Map Pins/Map Pin Lock",
  component: Map_Pin_Lock,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const MapPinLock = () => <Map_Pin_Lock />;
