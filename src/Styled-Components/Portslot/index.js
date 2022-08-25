import React from "react";
import { LinearProgress } from "@mui/material";
import VehicleIcon from "../Icons/VehicleIcon";
import {
  BatteryPer,
  Borderpartial,
  Dockedbox,
  Dockedmain,
  LayoutName,
  MainPort,
  Portbox,
  PortSlot,
  VehicleBoxport,
} from "./style";
import {
  Port1,
  PortVehicleName,
  ProgressPercent,
  Dockedat,
  Dockedate,
  Dockedby,
  DockedbyName,
} from "../Typography/Paragraph";

const Portslotmain = ({
  portNumber,
  vehicleName,
  precentage,
  dateAndtime,
  name,
}) => {
  return (
    <PortSlot>
      <MainPort>
        <Port1>{portNumber}</Port1>
        <LayoutName>
          <PortVehicleName>{vehicleName}</PortVehicleName>
          <BatteryPer>
            <LinearProgress variant="determinate" value={80} />
            <ProgressPercent>{precentage}</ProgressPercent>
          </BatteryPer>
        </LayoutName>
        <Dockedmain>
          <Dockedbox>
            <Dockedat>Docked At</Dockedat>
            <Dockedate>{dateAndtime}</Dockedate>
          </Dockedbox>
          <Borderpartial></Borderpartial>
          <Dockedbox>
            <Dockedby>Docked By</Dockedby>
            <DockedbyName>{name}</DockedbyName>
          </Dockedbox>
        </Dockedmain>
      </MainPort>
      <Portbox>
        <VehicleBoxport>
          <VehicleIcon></VehicleIcon>
        </VehicleBoxport>
      </Portbox>
    </PortSlot>
  );
};
export default Portslotmain;
