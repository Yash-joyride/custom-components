import React from "react";
import theme from "../../Globals/theme";
import { ThemeProvider } from "styled-components";
import { LiveMapFiltersAdvanceFilters, HeatMapFilter, LiveMapFilters, VehicleMapFilters, VehicleFilters, FleetFilters, GeofencingFilters, AddChartDropdown } from "../../Styled-Components/CustomDropdownMenus";

export const Live_Map_Filters_Advance_Filters = () => {
  return (
    <ThemeProvider theme={theme}>
      <LiveMapFiltersAdvanceFilters />
    </ThemeProvider>
  );
};

export const Heat_Map_Filter = () => {
  return (
    <ThemeProvider theme={theme}>
      <HeatMapFilter />
    </ThemeProvider>
  );
};

export const Live_Map_Filter = () => {
  return (
    <ThemeProvider theme={theme}>
      <LiveMapFilters />
    </ThemeProvider>
  );
};

export const Vehicle_Map_Filter = () => {
  return (
    <ThemeProvider theme={theme}>
      <VehicleMapFilters />
    </ThemeProvider>
  );
};

export const Vehicle_Filter = ({ arr }) => {
  return (
    <ThemeProvider theme={theme}>
      <VehicleFilters arr={arr} />
    </ThemeProvider>
  );
};

export const Fleet_Filter = ({ arr }) => {
  return (
    <ThemeProvider theme={theme}>
      <FleetFilters arr={arr} />
    </ThemeProvider>
  );
};

export const Geofencing_Filter = () => {
  return (
    <ThemeProvider theme={theme}>
      <GeofencingFilters />
    </ThemeProvider>
  );
};

export const Add_Chart_Dropdown = ({ arr }) => {
  return (
    <ThemeProvider theme={theme}>
      <AddChartDropdown arr={arr} />
    </ThemeProvider>
  );
};
