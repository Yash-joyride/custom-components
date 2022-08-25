import React from "react";
import VehicleCard from "../VehicalCard";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Vehicle Card/FilterVehicleCard",
  component: VehicleCard,
};

export const FilterVehicleCard = () => (
  <VehicleCard
    progress={80}
    vehicleName="Vehicle Name"
    status="Live"
    ticketNumber="1"
  />
);
