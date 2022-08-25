import React from "react";
import { Chart } from "react-google-charts";
import { Line, Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from "chart.js";
import { SecondaryButton, SmallPrimaryButton } from "../Button/style";
import DragIcon from "../Icons/DragIcon";
import AddIcon from "../Icons/AddIcon";
import theme from "../../Globals/theme";
import { TagIncrementalAnalyticStatus, TagDecrementalAnalyticStatus } from "../../stories/TagStory/tag";
import {
  BarGraphContainer,
  PieGraphContainer,
  LineGraphContainer,
  AddReportCardWrapper,
  AddReportContentWrapper,
  DailyTripRidersChartWrapper,
  EditCardBodyContentWrapper,
  EditCardBodyWrapper,
  EditCardContainer,
  EditCardHeaderWrapper,
  EditCardWrapper,
  ExtraLargeDailyTripRidersChartHeadingWrapper,
  ExtraLargeDailyTripRidersChartSubHeadingWrapper,
  LargeDailyTripRidersChartBarChartWrapper,
  LargeDailyTripRidersChartChartHeaderWrapper,
  LargeDailyTripRidersChartChartLegendContainer,
  LargeDailyTripRidersChartChartLegendIconWrapper,
  LargeDailyTripRidersChartChartLegendWrapper,
  LargeDailyTripRidersChartChartTimelineWrapper,
  LargeDailyTripRidersChartChartWrapper,
  LargeDailyTripRidersChartRidersContainer,
  LargeDailyTripRidersChartRidersNumberWrapper,
  LargeDailyTripRidersChartRidersWrapper,
  LargeDailyTripRidersChartSubHeadingWrapper,
} from "./style";

ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, ArcElement, LineElement, Title, Tooltip, Legend);

export const AddReportCard = ({ width, height }) => {
  return (
    <AddReportCardWrapper width={width} height={height}>
      <AddReportContentWrapper>
        <AddIcon />
        Add a Report View
      </AddReportContentWrapper>
    </AddReportCardWrapper>
  );
};

export const ExtraLargeDailyTripRidersChart = ({ width, height }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          padding: 30,

          usePointStyle: true,
          pointStyle: "circle",
          color: theme.colourTextSecondary,

          font: {
            size: theme.fontSize_10,
            family: theme.fontWorkSansRegular,
          },
        },
        display: true,
        position: "bottom",
        align: "start",
      },
    },
    scales: {
      x: {
        grid: { borderDash: [4, 4] },
        ticks: {
          font: {
            size: theme.fontSize_10,
            family: theme.fontWorkSansRegular,
            color: theme.colourTextSecondary,
          },
        },
      },
      y: {
        grid: { borderDash: [4, 4], borderColor: theme.colourMaterialBorder },
        ticks: {
          font: {
            size: theme.fontSize_10,
            family: theme.fontWorkSansRegular,
            color: theme.colourTextSecondary,
          },
        },
      },
    },
  };

  const labels = ["SEP 10, 2021", "SEP 11, 2021", "SEP 12, 2021", "SEP 13, 2021", "SEP 14, 2021"];

  const data = {
    labels,
    datasets: [
      {
        pointStyle: "rect",
        label: "Daily Trips",
        data: [35, 27, 34, 28, 34],
        borderColor: theme.colourData2,
        borderWidth: 1,
        backgroundColor: theme.colourData2,
      },
      {
        pointStyle: "rect",
        label: "Daily Riders",
        data: [15, 9, 18, 14, 8],
        borderColor: theme.colourData1,
        borderWidth: 1,

        backgroundColor: theme.colourData1,
      },
    ],
  };

  return (
    <DailyTripRidersChartWrapper width={width} height={height}>
      <ExtraLargeDailyTripRidersChartSubHeadingWrapper>Daily Fleet(s) Activity</ExtraLargeDailyTripRidersChartSubHeadingWrapper>
      <ExtraLargeDailyTripRidersChartHeadingWrapper>Daily Trips and Riders Per Day</ExtraLargeDailyTripRidersChartHeadingWrapper>
      <LineGraphContainer>
        <Line options={options} data={data} />
      </LineGraphContainer>
      {/* <LargeDailyTripRidersChartChartLegendContainer>
        <LargeDailyTripRidersChartChartLegendWrapper>
          <LargeDailyTripRidersChartChartLegendIconWrapper color={theme.colourData1} />
          Daily Riders
        </LargeDailyTripRidersChartChartLegendWrapper>
        <LargeDailyTripRidersChartChartLegendWrapper>
          <LargeDailyTripRidersChartChartLegendIconWrapper color={theme.colourData2} />
          Daily Trips
        </LargeDailyTripRidersChartChartLegendWrapper>
      </LargeDailyTripRidersChartChartLegendContainer> */}
    </DailyTripRidersChartWrapper>
  );
};

export const LargeDailyTripRidersChart = ({ width, totalRider, newRider, timeLine }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          padding: 15,
          usePointStyle: true,
          pointStyle: "circle",
          color: theme.colourTextSecondary,

          font: {
            size: theme.fontSize_10,
            family: theme.fontWorkSansRegular,
          },
        },
        display: true,
        position: "bottom",
        align: "start",
      },
    },
  };

  const data = {
    labels: ["Signed Up Rider", "New Rider", "Active Monthly Rider"],
    datasets: [
      {
        data: [12.5, 62.5, 25],
        label: "Daily Trips",

        backgroundColor: [theme.colourData3, theme.colourData1, theme.colourData2],
        borderWidth: 0,
      },
    ],
  };
  return (
    <DailyTripRidersChartWrapper width={width}>
      <LargeDailyTripRidersChartSubHeadingWrapper>
        RIDERS
        <TagDecrementalAnalyticStatus>3.0%</TagDecrementalAnalyticStatus>
      </LargeDailyTripRidersChartSubHeadingWrapper>
      <LargeDailyTripRidersChartRidersWrapper>
        <LargeDailyTripRidersChartRidersContainer>
          <LargeDailyTripRidersChartRidersNumberWrapper>{totalRider}</LargeDailyTripRidersChartRidersNumberWrapper>
          Total Riders
        </LargeDailyTripRidersChartRidersContainer>
        <LargeDailyTripRidersChartRidersContainer>
          <LargeDailyTripRidersChartRidersNumberWrapper>{newRider}</LargeDailyTripRidersChartRidersNumberWrapper>
          New Riders
        </LargeDailyTripRidersChartRidersContainer>
      </LargeDailyTripRidersChartRidersWrapper>
      <LargeDailyTripRidersChartChartWrapper>
        <LargeDailyTripRidersChartChartHeaderWrapper>Total Riders</LargeDailyTripRidersChartChartHeaderWrapper>
        <PieGraphContainer>
          <div>{timeLine}</div>

          <Pie data={data} options={options} />
        </PieGraphContainer>
      </LargeDailyTripRidersChartChartWrapper>
    </DailyTripRidersChartWrapper>
  );
};

export const LargeDailyTripRidersBarChart = ({ width, height, totalTrip, usage }) => {
  const options = {
    responsive: true,

    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          padding: 15,

          usePointStyle: true,
          pointStyle: "circle",
          color: theme.colourTextSecondary,

          font: {
            size: theme.fontSize_10,
            family: theme.fontWorkSansRegular,
          },
        },
        display: true,
        position: "bottom",
        align: "start",
      },
    },
    scales: {
      x: {
        grid: { borderDash: [4, 4] },
        ticks: {
          font: {
            size: theme.fontSize_10,
            family: theme.fontWorkSansRegular,
            color: theme.colourTextSecondary,
          },
        },
      },
      y: {
        grid: { borderDash: [4, 4], borderColor: theme.colourMaterialBorder },
        ticks: {
          max: 100,
          min: 0,
          font: {
            size: theme.fontSize_10,
            family: theme.fontWorkSansRegular,
            color: theme.colourTextSecondary,
          },
        },
      },
    },
  };

  const labels = ["SEP 10, 2021 — SEP 14, 2021"];

  const data = {
    labels,
    datasets: [
      {
        label: "Average Trips Per Vehicle Per Day",
        data: [8],
        backgroundColor: theme.colourData1,
      },
      {
        label: "Average Trips Per Day",
        data: [35],
        backgroundColor: theme.colourData2,
      },
      {
        label: "Average Trips Per Hour",
        data: [12],
        backgroundColor: theme.colourData3,
      },
    ],
  };
  return (
    <DailyTripRidersChartWrapper width={width} height={height}>
      <LargeDailyTripRidersChartSubHeadingWrapper>TRIPS</LargeDailyTripRidersChartSubHeadingWrapper>
      <LargeDailyTripRidersChartRidersWrapper>
        <LargeDailyTripRidersChartRidersContainer>
          <LargeDailyTripRidersChartRidersNumberWrapper>{totalTrip}</LargeDailyTripRidersChartRidersNumberWrapper>
          Total Trips
        </LargeDailyTripRidersChartRidersContainer>
        <LargeDailyTripRidersChartRidersContainer>
          <LargeDailyTripRidersChartRidersNumberWrapper>{usage}</LargeDailyTripRidersChartRidersNumberWrapper>
          Usage Per Day
        </LargeDailyTripRidersChartRidersContainer>
      </LargeDailyTripRidersChartRidersWrapper>
      <LargeDailyTripRidersChartBarChartWrapper>
        <LargeDailyTripRidersChartChartHeaderWrapper>Average Trips</LargeDailyTripRidersChartChartHeaderWrapper>
        <BarGraphContainer>
          <Bar options={options} data={data} />
        </BarGraphContainer>
      </LargeDailyTripRidersChartBarChartWrapper>
    </DailyTripRidersChartWrapper>
  );
};

export const SmallDailyTripRidersChart = ({ width, height, editCardHeading }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          padding: 30,

          usePointStyle: true,
          pointStyle: "circle",
          color: theme.colourTextSecondary,

          font: {
            size: theme.fontSize_10,
            family: theme.fontWorkSansRegular,
          },
        },
        display: true,
        position: "bottom",
        align: "start",
      },
    },
    scales: {
      x: {
        grid: { borderDash: [4, 4] },
        ticks: {
          font: {
            size: theme.fontSize_10,
            family: theme.fontWorkSansRegular,
            color: theme.colourTextSecondary,
          },
        },
      },
      y: {
        grid: { borderDash: [4, 4], borderColor: theme.colourMaterialBorder },
        ticks: {
          font: {
            size: theme.fontSize_10,
            family: theme.fontWorkSansRegular,
            color: theme.colourTextSecondary,
          },
        },
      },
    },
  };

  const labels = ["SEP 10, 2021", "SEP 11, 2021", "SEP 12, 2021", "SEP 13, 2021", "SEP 14, 2021"];

  const data = {
    labels,
    datasets: [
      {
        pointStyle: "rect",
        label: "Daily Trips",
        data: [35, 27, 34, 28, 34],
        borderColor: theme.colourData3,
        borderWidth: 1,
        backgroundColor: theme.colourData3,
      },
      {
        pointStyle: "rect",
        label: "Daily Riders",
        data: [15, 9, 18, 14, 8],
        borderColor: theme.colourData1,
        borderWidth: 1,

        backgroundColor: theme.colourData1,
      },
    ],
  };
  return (
    <DailyTripRidersChartWrapper width={width} height={height}>
      <ExtraLargeDailyTripRidersChartSubHeadingWrapper>
        {editCardHeading}
        <TagIncrementalAnalyticStatus>2.0%</TagIncrementalAnalyticStatus>
      </ExtraLargeDailyTripRidersChartSubHeadingWrapper>
      <LineGraphContainer>
        <Line options={options} data={data} />
      </LineGraphContainer>
      {/* <LargeDailyTripRidersChartChartLegendContainer>
        <LargeDailyTripRidersChartChartLegendWrapper>
          <LargeDailyTripRidersChartChartLegendIconWrapper
            color={theme.colourData1}
          />
          Daily Riders
        </LargeDailyTripRidersChartChartLegendWrapper>
        <LargeDailyTripRidersChartChartLegendWrapper>
          <LargeDailyTripRidersChartChartLegendIconWrapper
            color={theme.colourData2}
          />
          Daily Trips
        </LargeDailyTripRidersChartChartLegendWrapper>
      </LargeDailyTripRidersChartChartLegendContainer> */}
    </DailyTripRidersChartWrapper>
  );
};

export const EditExtraLargeDailyTripRidersChart = ({ width, height, editCardHeading }) => {
  return (
    <EditCardContainer>
      <ExtraLargeDailyTripRidersChart width={width} height={height} />
      <EditCardWrapper width={width} height={height}>
        <EditCardHeaderWrapper>
          {editCardHeading}
          <SmallPrimaryButton>Remove</SmallPrimaryButton>
        </EditCardHeaderWrapper>
        <EditCardBodyWrapper>
          <EditCardBodyContentWrapper>
            <DragIcon />
            Drag to Reorder
          </EditCardBodyContentWrapper>
        </EditCardBodyWrapper>
      </EditCardWrapper>
    </EditCardContainer>
  );
};

export const EditLargeDailyTripRidersChart = ({ width, height, editCardHeading }) => {
  return (
    <EditCardContainer>
      <LargeDailyTripRidersChart width={width} height={height} />
      <EditCardWrapper width={width} height={height}>
        <EditCardHeaderWrapper>
          {editCardHeading}
          <SmallPrimaryButton>Remove</SmallPrimaryButton>
        </EditCardHeaderWrapper>
        <EditCardBodyWrapper>
          <EditCardBodyContentWrapper>
            <DragIcon />
            Drag to Reorder
          </EditCardBodyContentWrapper>
        </EditCardBodyWrapper>
      </EditCardWrapper>
    </EditCardContainer>
  );
};

export const EditSmallDailyTripRidersChart = ({ width, height, editCardHeading }) => {
  return (
    <EditCardContainer>
      <SmallDailyTripRidersChart width={width} height={height} />
      <EditCardWrapper width={width} height={height}>
        <EditCardHeaderWrapper>
          {editCardHeading}
          <SmallPrimaryButton>Remove</SmallPrimaryButton>
        </EditCardHeaderWrapper>
        <EditCardBodyWrapper>
          <EditCardBodyContentWrapper>
            <DragIcon />
            Drag to Reorder
          </EditCardBodyContentWrapper>
        </EditCardBodyWrapper>
      </EditCardWrapper>
    </EditCardContainer>
  );
};
