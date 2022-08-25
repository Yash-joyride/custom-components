import React from "react";
import theme from "../../Globals/theme";
import { ThemeProvider } from "styled-components";
import {
  HeatmapRangeSlider,
  LabeledRangeSlider,
  RangeSlider,
} from "../../Styled-Components/RangeSlider";

export const Range_Slider = () => {
  return (
    <ThemeProvider theme={theme}>
      <RangeSlider />
    </ThemeProvider>
  );
};

export const Labeled_Range_Slider = ({ label }) => {
  return (
    <ThemeProvider theme={theme}>
      <LabeledRangeSlider label={label} />
    </ThemeProvider>
  );
};

export const Heatmap_Range_Slider = ({ label, min, max }) => {
  return (
    <ThemeProvider theme={theme}>
      <HeatmapRangeSlider label={label} min={min} max={max} />
    </ThemeProvider>
  );
};
