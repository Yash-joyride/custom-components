import React from "react";
import { Slider } from "@mui/material";
import {
  HeatmapRangeSliderMarkerWrapper,
  HeatmapRangeSliderWrapper,
  LabeledRangeSliderWrapper,
  RangeSliderMarkerWrapper,
  RangeSliderWrapper,
} from "./styles";
import {
  RangeSliderMarkers,
  RangeSliderLabelWrapper,
  HeatmapRangeSliderLabelWrapper,
} from "../Typography/Paragraph";

export const RangeSlider = () => {
  return (
    <RangeSliderWrapper>
      <Slider
        defaultValue={50}
        size="small"
        aria-label="Small"
        valueLabelDisplay="auto"
      />
      <RangeSliderMarkerWrapper>
        <RangeSliderMarkers>0%</RangeSliderMarkers>
        <RangeSliderMarkers>100%</RangeSliderMarkers>
      </RangeSliderMarkerWrapper>
    </RangeSliderWrapper>
  );
};

export const LabeledRangeSlider = ({ label }) => {
  return (
    <LabeledRangeSliderWrapper>
      <RangeSliderLabelWrapper> {label} </RangeSliderLabelWrapper>
      <RangeSliderMarkers>0%</RangeSliderMarkers>
      <Slider
        defaultValue={50}
        size="small"
        aria-label="Small"
        valueLabelDisplay="auto"
      />

      <RangeSliderMarkers>100%</RangeSliderMarkers>
    </LabeledRangeSliderWrapper>
  );
};

export const HeatmapRangeSlider = ({ label, min, max }) => {
  function valuetext(value) {
    return `${value}°C`;
  }

  const minDistance = 10;
  const [value2, setValue2] = React.useState([0, 100]);

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };
  return (
    <HeatmapRangeSliderWrapper>
      <HeatmapRangeSliderLabelWrapper>{label}</HeatmapRangeSliderLabelWrapper>
      <Slider
        getAriaLabel={() => "Minimum distance shift"}
        value={value2}
        onChange={handleChange2}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
      />
      <HeatmapRangeSliderMarkerWrapper>
        <RangeSliderMarkers> {min} </RangeSliderMarkers>
        <RangeSliderMarkers>00</RangeSliderMarkers>
        <RangeSliderMarkers> {max} </RangeSliderMarkers>
      </HeatmapRangeSliderMarkerWrapper>
    </HeatmapRangeSliderWrapper>
  );
};
