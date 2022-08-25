import React from "react";
import { LinearProgress } from "@mui/material";
import VehicleIcon from "../Icons/VehicleIcon";
import LiveIcon from "../Icons//LiveIcon";
// import theme from "../../Globals/theme";
import { BatteryPercent, FilterCard, MainCard, Divider, VehicleBox, VehicleLiveTicket } from "./style";
import { VehicleName } from "../Typography/Paragraph";
import { Live } from "../Typography/Paragraph";
import { ProgressPer } from "../Typography/Paragraph";

const VehicleCards = ({ progress, vehicleName, status, ticketNumber }) => {
  return (
    <FilterCard>
      <MainCard>
        <VehicleName>
          {vehicleName}
          <VehicleLiveTicket>
            <LiveIcon />
            <Live>{status}</Live>
            <Divider />
            <Live>{ticketNumber} Ticket</Live>
          </VehicleLiveTicket>
        </VehicleName>
        <BatteryPercent>
          <LinearProgress variant="determinate" value={progress} />
          <ProgressPer>{progress}%</ProgressPer>
        </BatteryPercent>
        <VehicleBox>
          <VehicleIcon />
        </VehicleBox>
      </MainCard>
    </FilterCard>
  );
};

export default VehicleCards;
