import React from "react";
import theme from "../../Globals/theme";
import { ThemeProvider } from "styled-components";
import {
  VehicleGroupMapPin,
  ChargingMapPin,
  BannerMapPin,
  LargeMapPinSlider,
  LockSignIconMapPin,
  MapPinLock,
  MediumMapPinSlider,
  OfferMapPin,
  RestrictedMapPin,
  ServiceMapPin,
  SlowSpeedMapPin,
  SmallMapPinSlider,
  VehiclePin,
  LiveVehiclePin,
  VehiclePinTicket,
  VehiclePinFlags,
  VehiclePinMaintainance,
  VehiclePinAgencyPickup,
  VehiclePinRebalance,
  ParkingMapPin,
  CustomMapPin,
  HeatMapTileCool,
  HeatMapTileWarm,
  HeatMapTileHot,
  HeatMapTileNeutral,
  HeatMapTileHover,
  HeatMapData,
} from "../../Styled-Components/MapPins";
import {
  CharginslotMapsection,
  Charginslotsection,
} from "../../Styled-Components/ChargingSlots";

export const DockComp = ({ chargingslotdetail }) => {
  return (
    <ThemeProvider theme={theme}>
      <Charginslotsection
        chargingslotdetail={chargingslotdetail}
      ></Charginslotsection>
    </ThemeProvider>
  );
};

export const DockMapComp = ({ chargingslotMapdetail }) => {
  return (
    <ThemeProvider theme={theme}>
      <CharginslotMapsection
        chargingslotMapdetail={chargingslotMapdetail}
      ></CharginslotMapsection>
    </ThemeProvider>
  );
};

export const Map_Pin_Lock = () => {
  return (
    <ThemeProvider theme={theme}>
      <MapPinLock />
    </ThemeProvider>
  );
};

export const Chargin_Map_Pin = () => {
  return (
    <ThemeProvider theme={theme}>
      <ChargingMapPin />
    </ThemeProvider>
  );
};

export const Parking_Map_Pin = () => {
  return (
    <ThemeProvider theme={theme}>
      <ParkingMapPin />
    </ThemeProvider>
  );
};

export const Restricted_Map_Pin = () => {
  return (
    <ThemeProvider theme={theme}>
      <RestrictedMapPin />
    </ThemeProvider>
  );
};

export const Service_Map_Pin = () => {
  return (
    <ThemeProvider theme={theme}>
      <ServiceMapPin />
    </ThemeProvider>
  );
};

export const SlowSpeed_Map_Pin = () => {
  return (
    <ThemeProvider theme={theme}>
      <SlowSpeedMapPin />
    </ThemeProvider>
  );
};

export const Custom_Map_Pin = () => {
  return (
    <ThemeProvider theme={theme}>
      <CustomMapPin />
    </ThemeProvider>
  );
};

export const Banner_Map_Pin = () => {
  return (
    <ThemeProvider theme={theme}>
      <BannerMapPin />
    </ThemeProvider>
  );
};

export const Offer_Map_Pin = () => {
  return (
    <ThemeProvider theme={theme}>
      <OfferMapPin />
    </ThemeProvider>
  );
};

export const VehicleGroup_Map_Pin = () => {
  return (
    <ThemeProvider theme={theme}>
      <VehicleGroupMapPin />
    </ThemeProvider>
  );
};

export const LockSignIcon_Map_Pin = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <LockSignIconMapPin> {children}</LockSignIconMapPin>
    </ThemeProvider>
  );
};

export const Vehicle_Pin = ({ value }) => {
  return (
    <ThemeProvider theme={theme}>
      <VehiclePin value={value} />
    </ThemeProvider>
  );
};

export const Live_Vehicle_Pin = ({ value }) => {
  return (
    <ThemeProvider theme={theme}>
      <LiveVehiclePin value={value} />
    </ThemeProvider>
  );
};

export const Vehicle_Pin_Ticket = ({ value }) => {
  return (
    <ThemeProvider theme={theme}>
      <VehiclePinTicket value={value} />
    </ThemeProvider>
  );
};

export const Vehicle_Pin_Flags = ({ value }) => {
  return (
    <ThemeProvider theme={theme}>
      <VehiclePinFlags value={value} />
    </ThemeProvider>
  );
};

export const Vehicle_Pin_Maintainance = ({ value }) => {
  return (
    <ThemeProvider theme={theme}>
      <VehiclePinMaintainance value={value} />
    </ThemeProvider>
  );
};

export const Vehicle_Pin_Agency_Pickup = ({ value }) => {
  return (
    <ThemeProvider theme={theme}>
      <VehiclePinAgencyPickup value={value} />
    </ThemeProvider>
  );
};

export const Vehicle_Pin_Rebalance = ({ value }) => {
  return (
    <ThemeProvider theme={theme}>
      <VehiclePinRebalance value={value} />
    </ThemeProvider>
  );
};

export const Small_Map_Pin_Slider = () => {
  return (
    <ThemeProvider theme={theme}>
      <SmallMapPinSlider />
    </ThemeProvider>
  );
};

export const Medium_Map_Pin_Slider = () => {
  return (
    <ThemeProvider theme={theme}>
      <MediumMapPinSlider />
    </ThemeProvider>
  );
};

export const Large_Map_Pin_Slider = () => {
  return (
    <ThemeProvider theme={theme}>
      <LargeMapPinSlider />
    </ThemeProvider>
  );
};

export const Heat_Map_Tile_Cool = () => {
  return (
    <ThemeProvider theme={theme}>
      <HeatMapTileCool />
    </ThemeProvider>
  );
};

export const Heat_Map_Tile_Warm = () => {
  return (
    <ThemeProvider theme={theme}>
      <HeatMapTileWarm />
    </ThemeProvider>
  );
};

export const Heat_Map_Tile_Hot = () => {
  return (
    <ThemeProvider theme={theme}>
      <HeatMapTileHot />
    </ThemeProvider>
  );
};

export const Heat_Map_Tile_Neutral = () => {
  return (
    <ThemeProvider theme={theme}>
      <HeatMapTileNeutral />
    </ThemeProvider>
  );
};

export const Heat_Map_Tile_Hover = () => {
  return (
    <ThemeProvider theme={theme}>
      <HeatMapTileHover />
    </ThemeProvider>
  );
};

export const Heat_Map_Data = () => {
  return (
    <ThemeProvider theme={theme}>
      <HeatMapData />
    </ThemeProvider>
  );
};
