import React from "react";
import { Heat_Map_Data} from "./MapPins";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Map Pins/Playback",
  component: Heat_Map_Data
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const Map_Data = () => <Heat_Map_Data />;