import React from "react";
import {
  Banner_Map_Pin,
  Chargin_Map_Pin,
  Custom_Map_Pin,
  LockSignIcon_Map_Pin,
  Offer_Map_Pin,
  Restricted_Map_Pin,
  SlowSpeed_Map_Pin,
  Service_Map_Pin,
  VehicleGroup_Map_Pin,
  DockMapComp,
  DockComp,
  Parking_Map_Pin,
} from "./MapPins";

// import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Map Pins/Map Pins",
  component: Parking_Map_Pin,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};
export const SlotContent = () => <DockComp chargingslotdetail="2/8" />;
export const ChargingMapPin = () => <Chargin_Map_Pin />;
export const ChargingMapPinWithSlotContent = () => (
  <DockMapComp chargingslotMapdetail="2/8"></DockMapComp>
);

export const ParkingMapPin = () => <Parking_Map_Pin />;
export const ParkingLockMapPin = () => (
  <LockSignIcon_Map_Pin>
    <Parking_Map_Pin />
  </LockSignIcon_Map_Pin>
);
export const BannerMapPin = () => <Banner_Map_Pin />;
export const BannerLockMapPin = () => (
  <LockSignIcon_Map_Pin>
    <Banner_Map_Pin />
  </LockSignIcon_Map_Pin>
);
export const CustomMapPin = () => <Custom_Map_Pin />;
export const CustomLockMapPin = () => (
  <LockSignIcon_Map_Pin>
    <Custom_Map_Pin />
  </LockSignIcon_Map_Pin>
);
export const OfferMapPin = () => <Offer_Map_Pin />;
export const OfferLockMapPin = () => (
  <LockSignIcon_Map_Pin>
    <Offer_Map_Pin />
  </LockSignIcon_Map_Pin>
);
export const RestrictedMapPin = () => <Restricted_Map_Pin />;
export const RestrictedLockMapPin = () => (
  <LockSignIcon_Map_Pin>
    <Restricted_Map_Pin />
  </LockSignIcon_Map_Pin>
);
export const SlowSpeedMapPin = () => <SlowSpeed_Map_Pin />;
export const SlowSpeedLockMapPin = () => (
  <LockSignIcon_Map_Pin>
    <SlowSpeed_Map_Pin />
  </LockSignIcon_Map_Pin>
);
export const VehicleGroupMapPin = () => <VehicleGroup_Map_Pin />;
export const VehicleGroupLockMapPin = () => (
  <LockSignIcon_Map_Pin>
    <VehicleGroup_Map_Pin />
  </LockSignIcon_Map_Pin>
);
export const ServiceMapPin = () => <Service_Map_Pin />;
export const ServiceLockMapPin = () => (
  <LockSignIcon_Map_Pin>
    <Service_Map_Pin />
  </LockSignIcon_Map_Pin>
);
