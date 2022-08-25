import React from "react";
import {
  Analyticardmain,
  TripHeatmapmain,
} from "../../Styled-Components/AnalyticsCard";
import theme from "../../Globals/theme";
import { ThemeProvider } from "styled-components";

const Analyticpresentmain = () => {
  return (
    <ThemeProvider theme={theme}>
      <Analyticardmain></Analyticardmain>
    </ThemeProvider>
  );
};

const TripHeatmapnew = () => {
  return (
    <ThemeProvider theme={theme}>
      <TripHeatmapmain></TripHeatmapmain>
    </ThemeProvider>
  );
};

export { Analyticpresentmain, TripHeatmapnew };
