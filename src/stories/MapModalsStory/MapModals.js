import React from "react";
import theme from "../../Globals/theme";
import { ThemeProvider } from "styled-components";
import { VehicleMarkerRiderDetails, VehicleMarkerCompletedRide, VehicleMarkerVehicleDetails } from "../../Styled-Components/MapModals/VehicleMarkers";
import { TripHoverModal } from "../../Styled-Components/MapModals/TripHover/index";
import { HeatmapCellHoverModal } from "../../Styled-Components/MapModals/HeatmapCellHover";
import { StationHoverModal } from "../../Styled-Components/MapModals/StationHover";
import { ZoneHoverModal, LockedZoneHoverModal } from "../../Styled-Components/MapModals/ZoneHover";

export const Vehicle_Marker_Rider_Details = ({ riderNameTrip, status, startTime, name }) => {
  return (
    <ThemeProvider theme={theme}>
      <VehicleMarkerRiderDetails riderNameTrip={riderNameTrip} status={status} startTime={startTime} name={name} />
    </ThemeProvider>
  );
};

export const Vehicle_Marker_Completed_Ride = ({ riderNameTrip, status, price, distance, pause, name }) => {
  return (
    <ThemeProvider theme={theme}>
      <VehicleMarkerCompletedRide riderNameTrip={riderNameTrip} status={status} price={price} distance={distance} pause={pause} name={name} />
    </ThemeProvider>
  );
};

export const Vehicle_Marker_Vehicle_Details = ({ vehicleNumber, tickets, status, lastRideTime, lastLockStatus, imei, vehicleNum, distance, kilometer, qrCode, registeredDate, battery }) => {
  return (
    <ThemeProvider theme={theme}>
      <VehicleMarkerVehicleDetails vehicleNumber={vehicleNumber} tickets={tickets} status={status} lastRideTime={lastRideTime} lastLockStatus={lastLockStatus} imei={imei} vehicleNum={vehicleNum} distance={distance} kilometer={kilometer} qrCode={qrCode} registeredDate={registeredDate} battery={battery} />
    </ThemeProvider>
  );
};

export const Trip_Hover_Modal = ({ tripId, date, riderName, tripDistance, tripPayment }) => {
  return (
    <ThemeProvider theme={theme}>
      <TripHoverModal tripId={tripId} date={date} riderName={riderName} tripDistance={tripDistance} tripPayment={tripPayment} />
    </ThemeProvider>
  );
};

export const Heatmap_Cell_Hover_Modal = ({ heatmapCellHoverModal, heatmapCellHoverSectionContentWrapper, heatmapCellHoverSectionContent }) => {
  return (
    <ThemeProvider theme={theme}>
      <HeatmapCellHoverModal heatmapCellHoverModal={heatmapCellHoverModal} heatmapCellHoverSectionContentWrapper={heatmapCellHoverSectionContentWrapper} heatmapCellHoverSectionContent={heatmapCellHoverSectionContent} />
    </ThemeProvider>
  );
};

export const Station_Hover_Modal = ({ stationName, labelName, vehiclesAvailable, portsAvailable }) => {
  return (
    <ThemeProvider theme={theme}>
      <StationHoverModal stationName={stationName} labelName={labelName} vehiclesAvailable={vehiclesAvailable} portsAvailable={portsAvailable} />
    </ThemeProvider>
  );
};

export const Zone_Hover_Modal = ({
  zone,
  children,
  zoneName,
  parkingZone,
  fleetName,
  associatedFleet,
}) => {

return (
    <ThemeProvider theme={theme}>
      <ZoneHoverModal children={children} zone={zone} zoneName={zoneName} parkingZone={parkingZone} fleetName={fleetName} associatedFleet={associatedFleet} />
    </ThemeProvider>
  );
};

export const Locked_Zone_Hover_Modal = ({ zone, children, zoneName, parkingZone, fleetName, associatedFleet }) => {
  return (
    <ThemeProvider theme={theme}>
      <LockedZoneHoverModal zone={zone} children={children} zoneName={zoneName} parkingZone={parkingZone} fleetName={fleetName} associatedFleet={associatedFleet} />
    </ThemeProvider>
  );
};
