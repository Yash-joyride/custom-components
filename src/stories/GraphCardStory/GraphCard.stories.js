import React from "react";
import {
  Edit_Extra_Large_Daily_Trip_Riders_Chart,
  Add_Report_Card,
  Extra_Large_Daily_Trip_Riders_Chart,
  Large_Daily_Trip_Riders_Chart,
  Large_Daily_Trip_Riders_Bar_Chart,
  Small_Daily_Trip_Riders_Bar_Chart,
  Edit_Large_Daily_Trip_Riders_Chart,
  Edit_Small_Daily_Trip_Riders_Chart,
} from "./GraphCard";

// import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Graph Card/ Add Report Card",
  component: Add_Report_Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const ExtraLargeAddReportCard = () => (
  <Add_Report_Card width="542px" height="500px" />
);
export const LargeAddReportCard = () => (
  <Add_Report_Card width="269px" height="500px" />
);
export const SmallAddReportCard = () => (
  <Add_Report_Card width="360px" height="324px" />
);
export const ExtraLargeDailyTripRidersChart = () => (
  <Extra_Large_Daily_Trip_Riders_Chart width="442px" height="400px" />
);
export const LargeDailyTripRidersChart = () => (
  <Large_Daily_Trip_Riders_Chart
    width="269px"
    totalRider="17"
    newRider="2"
    timeLine="SEP 10, 2021 — SEP 14, 2021"
  />
);
export const LargeDailyTripRidersBarChart = () => (
  <Large_Daily_Trip_Riders_Bar_Chart
    width="269px"
    height="450px"
    totalTrip="17"
    usage="2"
  />
);
export const SmallDailyTripRidersChart = () => (
  <Small_Daily_Trip_Riders_Bar_Chart
    width="360px"
    height="324px"
    editCardHeading="Statistic Name"
  />
);
export const EditExtraLargeDailyTripRidersChart = () => (
  <Edit_Extra_Large_Daily_Trip_Riders_Chart
    width="542px"
    height="500px"
    editCardHeading="STATISTIC NAME"
  />
);
export const EditLargeDailyTripRidersChart = () => (
  <Edit_Large_Daily_Trip_Riders_Chart
    width="269px"
    height="508px"
    editCardHeading="STATISTIC NAME"
  />
);
export const EditSmallDailyTripRidersChart = () => (
  <Edit_Small_Daily_Trip_Riders_Chart
    width="360px"
    height="324px"
    editCardHeading="STATISTIC NAME"
  />
);
