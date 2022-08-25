import React from "react";
import {
  Vehicle_Marker_Rider_Details,
  Vehicle_Marker_Completed_Ride,
  Vehicle_Marker_Vehicle_Details,
} from "../MapModals";

// import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Map Modals/ Vehicle Markers",
  component: Vehicle_Marker_Rider_Details,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const VehicleMarkerRiderDetails = () => (
  <Vehicle_Marker_Rider_Details
    riderNameTrip="Rider Name’s Trip"
    status="Live Trip"
    startTime="10:00:00AM"
    name="User Name"
  />
);
export const VehicleMarkerCompletedRide = () => (
  <Vehicle_Marker_Completed_Ride
    riderNameTrip="Rider Name’s Trip"
    status="Completed Ride"
    price="5"
    distance="10"
    pause="1"
    name="User Name"
  />
);
export const VehicleMarkerVehicleDetails = () => (
  <Vehicle_Marker_Vehicle_Details
    vehicleNumber="Vehicle Number"
    battery={80}
    tickets="10"
    status="Not Connected"
    lastRideTime="00/00/0000 00:00AM"
    lastLockStatus="00/00/0000 00:00AM"
    imei="861475030386272"
    vehicleNum="-"
    distance="Odometer Distance (KM)"
    kilometer="-"
    qrCode="66755008584"
    registeredDate="-"
  />
);
