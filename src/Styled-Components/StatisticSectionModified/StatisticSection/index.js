import React, { useState } from "react";
import { Paper, useTheme, Button, MobileStepper, Stepper, Step } from "@mui/material";

import { StatisticComponent } from "../StatisticComponent";
import { StatisticSectionWrapper, StatisticSectionContainer } from "./style";

import { CycleIcon } from "../../Icons/CycleIcon";
import { DollarIcon } from "../../Icons/DollarIcon";
import { ArrowIconbackslider } from "../../Icons/ArrowIconbackslider";
import { ArrowIconslider } from "../../Icons/Arrowiconslider";

const steps = [
  {
    heading: "TOTAL TRIPS",
    percentage: "2.0%",
    stats: "10",
    icon: <CycleIcon />,
    label: "Trips Completed",
  },
  {
    heading: "AVERAGE TRIPS",
    percentage: "2.0%",

    stats: "20",
    icon: <CycleIcon />,
    label: "Average trips per month",
  },
  {
    heading: "WALLET CREDIT",
    percentage: "2.0%",

    stats: "$ 30.00",
    icon: <DollarIcon />,
    label: "Credit",
  },
  {
    heading: "WALLET DEBIT",
    percentage: "2.0%",

    stats: "$ 40.00",
    icon: <DollarIcon />,

    label: "Debit",
  },
  {
    heading: "TOTAL TRIPS",
    percentage: "2.0%",

    stats: "50",
    icon: <CycleIcon />,

    label: "Trips Completed",
  },
  {
    heading: "AVERAGE TRIPS",
    percentage: "2.0%",

    stats: "60",
    icon: <CycleIcon />,

    label: "Average trips per month",
  },
  {
    heading: "WALLET CREDIT",
    percentage: "2.0%",

    stats: "$ 70.00",
    icon: <DollarIcon />,

    label: "Credit",
  },
  {
    heading: "WALLET DEBIT",
    percentage: "2.0%",

    stats: "$ 80.00",
    icon: <DollarIcon />,

    label: "Debit",
  },
];

export const StatisticSection = () => {
  const theme = useTheme();
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(4);
  const [currentPageValue, setCurrentPageValue] = useState(1);
  const [numEachPage, setnumEachPage] = useState(4);

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setMinValue(currentPageValue * numEachPage);
    setMaxValue((currentPageValue + 1) * numEachPage <= steps.length ? (currentPageValue + 1) * numEachPage : steps.length);
    setCurrentPageValue(currentPageValue + 1);
  };

  const handleBack = () => {
    setMinValue((currentPageValue - 2) * numEachPage);
    setMaxValue((currentPageValue - 1) * numEachPage >= steps.length && (currentPageValue - 2) * numEachPage >= steps.length - numEachPage ? steps.length : (currentPageValue - 1) * numEachPage);
    setCurrentPageValue(currentPageValue - 1);
  };
  return (
    <StatisticSectionContainer>
      <StatisticSectionWrapper>
        <Paper elevation={0} sx={{ display: "flex", overflow: "hidden", width: "100%" }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.slice(minValue, maxValue).map((step, index) => (
              <Step key={index}>
                <StatisticComponent heading={step.heading} stats={step.stats} icon={step.icon} percentage={step.percentage} label={step.label} />
              </Step>
            ))}
          </Stepper>

          {/* {steps.map((step, index) => {
          return <>{Math.abs(activeStep - index) < 4 ? <StatisticComponent heading={step.heading} stats={step.stats} icon={step.icon} percentage={step.percentage} label={step.label} /> : <div></div>}</>;
        })} */}
        </Paper>
        {steps.length > 4 ? (
          <MobileStepper
            // sx={{display: 'inline'}}
            // position="static"
            nextButton={
              <Button
                // sx= {{ color:'transparent', ':hover': {backgroundColor:'transparent'}}}
                // size="small"
                onClick={handleNext}
                disabled={steps.length / numEachPage === currentPageValue}
              >
                {theme.direction === "rtl" ? <ArrowIconbackslider /> : <ArrowIconslider />}
              </Button>
            }
            backButton={
              <Button
                //  sx= {{ color:'transparent',':hover': {backgroundColor:'transparent'}}} size="small"
                onClick={handleBack}
                disabled={currentPageValue === 1}
              >
                {theme.direction === "rtl" ? <ArrowIconslider /> : <ArrowIconbackslider />}
              </Button>
            }
          />
        ) : null}
      </StatisticSectionWrapper>
    </StatisticSectionContainer>
  );
};
