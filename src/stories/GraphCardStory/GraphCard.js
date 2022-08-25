import React from "react";
import theme from "../../Globals/theme";
import { ThemeProvider } from "styled-components";
import {
  AddReportCard,
  EditExtraLargeDailyTripRidersChart,
  EditLargeDailyTripRidersChart,
  EditSmallDailyTripRidersChart,
  ExtraLargeDailyTripRidersChart,
  LargeDailyTripRidersBarChart,
  LargeDailyTripRidersChart,
  SmallDailyTripRidersChart,
} from "../../Styled-Components/GraphCard";

export const Add_Report_Card = ({ width, height }) => {
  return (
    <ThemeProvider theme={theme}>
      <AddReportCard width={width} height={height} />
    </ThemeProvider>
  );
};

export const Extra_Large_Daily_Trip_Riders_Chart = ({ width, height }) => {
  return (
    <ThemeProvider theme={theme}>
      <ExtraLargeDailyTripRidersChart width={width} height={height} />
    </ThemeProvider>
  );
};

export const Large_Daily_Trip_Riders_Chart = ({
  width,
  totalRider,
  newRider,
  timeLine,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <LargeDailyTripRidersChart
        width={width}
        totalRider={totalRider}
        newRider={newRider}
        timeLine={timeLine}
      />
    </ThemeProvider>
  );
};

export const Large_Daily_Trip_Riders_Bar_Chart = ({
  width,
  height,
  totalTrip,
  usage,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <LargeDailyTripRidersBarChart
        width={width}
        height={height}
        totalTrip={totalTrip}
        usage={usage}
      />
    </ThemeProvider>
  );
};

export const Small_Daily_Trip_Riders_Bar_Chart = ({
  width,
  height,
  editCardHeading,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <SmallDailyTripRidersChart
        width={width}
        height={height}
        editCardHeading={editCardHeading}
      />
    </ThemeProvider>
  );
};

export const Edit_Extra_Large_Daily_Trip_Riders_Chart = ({
  width,
  height,
  editCardHeading,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <EditExtraLargeDailyTripRidersChart
        width={width}
        height={height}
        editCardHeading={editCardHeading}
      />
    </ThemeProvider>
  );
};

export const Edit_Large_Daily_Trip_Riders_Chart = ({
  width,
  height,
  editCardHeading,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <EditLargeDailyTripRidersChart
        width={width}
        height={height}
        editCardHeading={editCardHeading}
      />
    </ThemeProvider>
  );
};

export const Edit_Small_Daily_Trip_Riders_Chart = ({
  width,
  height,
  editCardHeading,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <EditSmallDailyTripRidersChart
        width={width}
        height={height}
        editCardHeading={editCardHeading}
      />
    </ThemeProvider>
  );
};
