import React from "react";
import {
  AnalyticscardIcon,
  AnalyticscardIcontrip,
} from "../Icons/Analyticscardicon";
import { Analytiscard, MainTrip, Statisticmain, TripHeatMap } from "./style";

import {
  AnalyticPresent,
  AnalyticPresenttrip,
  StatisticName,
  Statistic,
} from "../Typography/Paragraph";
import { TripHeatmapmainItems } from "./constant";

const Analyticardmain = () => {
  return (
    <Analytiscard>
      <AnalyticPresent>Analytics Preset</AnalyticPresent>
      <AnalyticscardIcon></AnalyticscardIcon>
    </Analytiscard>
  );
};

const TripHeatmapmain = () => {
  return (
    <TripHeatMap>
      <MainTrip>
        <AnalyticPresenttrip>Trips Heat Map</AnalyticPresenttrip>
        <AnalyticscardIcontrip></AnalyticscardIcontrip>
      </MainTrip>
      {TripHeatmapmainItems.map((TripHeatmapmainItem) => {
        return (
          <Statisticmain>
            <StatisticName>{TripHeatmapmainItem.name}</StatisticName>
            <Statistic>{TripHeatmapmainItem.value}</Statistic>
          </Statisticmain>
        );
      })}
    </TripHeatMap>
  );
};
export { Analyticardmain, TripHeatmapmain };
