import React from "react";
import ChargingStationIcon from "../Icons/Charging-station";
import {
  ChargingMapslotbox,
  Chargingslotbox,
  ChargingslotMapbox,
} from "./style";
import { Chargingslotdetail } from "../Typography/Paragraph";
const Charginslotsection = ({ chargingslotdetail }) => {
  return (
    <Chargingslotbox>
      <Chargingslotdetail>{chargingslotdetail}</Chargingslotdetail>
    </Chargingslotbox>
  );
};

const CharginslotMapsection = ({ chargingslotMapdetail }) => {
  return (
    <ChargingslotMapbox>
      <ChargingStationIcon></ChargingStationIcon>
      <ChargingMapslotbox>
        <Chargingslotdetail>{chargingslotMapdetail}</Chargingslotdetail>
      </ChargingMapslotbox>
    </ChargingslotMapbox>
  );
};
export { Charginslotsection, CharginslotMapsection };
