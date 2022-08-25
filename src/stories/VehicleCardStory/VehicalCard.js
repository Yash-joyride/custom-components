import React from "react";
import theme from "../../Globals/theme";
import { ThemeProvider } from "styled-components";
import VehicleCards from "../../Styled-Components/VehicleCard";

const VehicleCard = ({ progress, vehicleName, status, ticketNumber }) => {
  return (
    <ThemeProvider theme={theme}>
      <VehicleCards
        progress={progress}
        vehicleName={vehicleName}
        status={status}
        ticketNumber={ticketNumber}
      />
    </ThemeProvider>
  );
};

export default VehicleCard;
