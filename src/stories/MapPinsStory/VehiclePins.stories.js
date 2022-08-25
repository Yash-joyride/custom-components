import React from "react";
import { Vehicle_Pin, Live_Vehicle_Pin, Vehicle_Pin_Ticket, Vehicle_Pin_Flags, Vehicle_Pin_Maintainance, Vehicle_Pin_Agency_Pickup, Vehicle_Pin_Rebalance } from "./MapPins";

// import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Map Pins/Vehicle Pins",
  component: Vehicle_Pin,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const ChargedVehiclePin = () => <Vehicle_Pin value={80} />;
export const NeedChargingVehiclePin = () => <Vehicle_Pin value={50} />;
export const BatteryLowVehiclePin = () => <Vehicle_Pin value={30} />;
export const ChargedLiveVehiclePin = () => <Live_Vehicle_Pin value={80} />;
export const NeedChargingLiveVehiclePin = () => <Live_Vehicle_Pin value={50} />;
export const BatteryLowLiveVehiclePin = () => <Live_Vehicle_Pin value={30} />;
export const ChargedVehiclePinTicket = () => <Vehicle_Pin_Ticket value={80} />;
export const NeedChargingVehiclePinTicket = () => <Vehicle_Pin_Ticket value={50} />;
export const BatteryLowVehiclePinTicket = () => <Vehicle_Pin_Ticket value={30} />;
export const ChargedVehiclePinFlags = () => <Vehicle_Pin_Flags value={80} />;
export const NeedChargingVehiclePinFlags = () => <Vehicle_Pin_Flags value={50} />;
export const BatteryLowVehiclePinFlags = () => <Vehicle_Pin_Flags value={30} />;
export const ChargedVehiclePinMaintainance = () => <Vehicle_Pin_Maintainance value={80} />;
export const NeedChargingVehiclePinMaintainance = () => <Vehicle_Pin_Maintainance value={50} />;
export const BatteryLowVehiclePinMaintainance = () => <Vehicle_Pin_Maintainance value={30} />;
export const ChargedVehiclePinAgencyPickup = () => <Vehicle_Pin_Agency_Pickup value={80} />;
export const NeedChargingVehiclePinAgencyPickup = () => <Vehicle_Pin_Agency_Pickup value={50} />;
export const BatteryLowVehiclePinAgencyPickup = () => <Vehicle_Pin_Agency_Pickup value={30} />;
export const ChargedVehiclePinRebalance = () => <Vehicle_Pin_Rebalance value={80} />;
export const NeedChargingVehiclePinRebalance = () => <Vehicle_Pin_Rebalance value={50} />;
export const BatteryLowVehiclePinRebalance = () => <Vehicle_Pin_Rebalance value={30} />;
