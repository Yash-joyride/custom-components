import React from "react";
import { Heat_Map_Tile_Cool, Heat_Map_Tile_Warm, Heat_Map_Tile_Hot, Heat_Map_Tile_Neutral, Heat_Map_Tile_Hover } from "./MapPins";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Map Pins/Heat Map Tiles",
  component: Heat_Map_Tile_Cool, Heat_Map_Tile_Warm, Heat_Map_Tile_Hot, Heat_Map_Tile_Neutral, Heat_Map_Tile_Hover
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const Cool_Heat_Map_Tile = () => <Heat_Map_Tile_Cool />;
export const Warm_Heat_Map_Tile = () => <Heat_Map_Tile_Warm />;
export const Hot_Heat_Map_Tile = () => <Heat_Map_Tile_Hot />;
export const Neutral_Heat_Map_Tile = () => <Heat_Map_Tile_Neutral />;
export const Hover_Heat_Map_Tile = () => <Heat_Map_Tile_Hover />;