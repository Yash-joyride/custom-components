import React from "react";
import theme from "../../Globals/theme";
import { ThemeProvider } from "styled-components";
import { StatisticComponent } from "../../Styled-Components/StatisticSectionModified/StatisticComponent";
import { StatisticSection } from "../../Styled-Components/StatisticSectionModified/StatisticSection";

export const Statistic_Component = ({ heading, label, icon, stats, percentage }) => {
  return (
    <ThemeProvider theme={theme}>
      <StatisticComponent heading={heading} stats={stats} icon={icon} label={label} percentage={percentage} />
    </ThemeProvider>
  );
};

export const Statistic_Section = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatisticSection />
    </ThemeProvider>
  );
};
