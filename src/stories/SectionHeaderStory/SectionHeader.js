import React from "react";
import theme from "../../Globals/theme";
import { ThemeProvider } from "styled-components";
import SectionHeader from "../../Styled-Components/SectionHeader";

const HeaderSection = ({ fleet, fleetDetail, fleetName, manageFleet }) => {
  return (
    <ThemeProvider theme={theme}>
      <SectionHeader
        fleet={fleet}
        fleetDetail={fleetDetail}
        fleetName={fleetName}
        manageFleet={manageFleet}
      />
    </ThemeProvider>
  );
};

export { HeaderSection };
