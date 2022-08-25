import React from "react";
import { HeaderSection } from "../SectionHeader";

export default {
  title: "Joyride/Section Header/Section Header",
  component: HeaderSection,
};

export const SectionHeader = () => (
  <HeaderSection
    fleet="Fleets"
    fleetDetail="Fleet Details"
    fleetName="Fleet Name"
    manageFleet="Manage this fleet"
  />
);
