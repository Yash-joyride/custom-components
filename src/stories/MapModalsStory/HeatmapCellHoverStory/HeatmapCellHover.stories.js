import React from "react";
import { Heatmap_Cell_Hover_Modal } from "../MapModals";

// import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Map Modals/ Heatmap Cell Hover",
  component: Heatmap_Cell_Hover_Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const TripHoverModal = () => (
  <Heatmap_Cell_Hover_Modal
    heatmapCellHoverModal="100"
    heatmapCellHoverSectionContentWrapper="Statistic"
    heatmapCellHoverSectionContent="000"
  />
);
