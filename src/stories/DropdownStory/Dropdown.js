import React from "react";
import theme from "../../Globals/theme";
import { ComponentDropdownMenuItemCheckboxSelect } from "../../Styled-Components/Dropdown/index";
import { ComponentDropdownFormNotRequiredSelect } from "../../Styled-Components/Dropdown/index";
import { ComponentDropdownSmallDisableSelect } from "../../Styled-Components/Dropdown/index";
import { ComponentDropdownFormRequiredSelect } from "../../Styled-Components/Dropdown/index";
import { ComponentDropdownFormMultiSelect } from "../../Styled-Components/Dropdown/index";
import { ComponentDropdownMenuItemSelect } from "../../Styled-Components/Dropdown/index";
import { ComponentDropdownStationSelect } from "../../Styled-Components/Dropdown/index";
import { ComponentDropdownMultiSelect } from "../../Styled-Components/Dropdown/index";
import { ComponentDropdownSmallSelect } from "../../Styled-Components/Dropdown/index";
import { DropdownComponent } from "../../Styled-Components/Dropdown/index";
import { ThemeProvider } from "styled-components";

const ComponentDropdown = () => {
  return (
    <ThemeProvider theme={theme}>
      <DropdownComponent />
    </ThemeProvider>
  );
};

const ComponentDropdownMulti = () => {
  return (
    <ThemeProvider theme={theme}>
      <ComponentDropdownMultiSelect />
    </ThemeProvider>
  );
};

const ComponentDropdownSmall = () => {
  return (
    <ThemeProvider theme={theme}>
      <ComponentDropdownSmallSelect />
    </ThemeProvider>
  );
};

const ComponentDropdownSmallDisable = () => {
  return (
    <ThemeProvider theme={theme}>
      <ComponentDropdownSmallDisableSelect />
    </ThemeProvider>
  );
};

const ComponentDropdownFormRequired = () => {
  return (
    <ThemeProvider theme={theme}>
      <ComponentDropdownFormRequiredSelect />
    </ThemeProvider>
  );
};

const ComponentDropdownFormNotRequired = () => {
  return (
    <ThemeProvider theme={theme}>
      <ComponentDropdownFormNotRequiredSelect />
    </ThemeProvider>
  );
};

const ComponentDropdownFormMulti = () => {
  return (
    <ThemeProvider theme={theme}>
      <ComponentDropdownFormMultiSelect />
    </ThemeProvider>
  );
};

const ComponentDropdownMenuItem = () => {
  return (
    <ThemeProvider theme={theme}>
      <ComponentDropdownMenuItemSelect />
    </ThemeProvider>
  );
};

const ComponentDropdownMenuItemCheckbox = () => {
  return (
    <ThemeProvider theme={theme}>
      <ComponentDropdownMenuItemCheckboxSelect />
    </ThemeProvider>
  );
};

const ComponentDropdownStation = () => {
  return (
    <ThemeProvider theme={theme}>
      <ComponentDropdownStationSelect />
    </ThemeProvider>
  );
};

export {
  ComponentDropdown,
  ComponentDropdownMulti,
  ComponentDropdownSmall,
  ComponentDropdownSmallDisable,
  ComponentDropdownFormRequired,
  ComponentDropdownFormNotRequired,
  ComponentDropdownFormMulti,
  ComponentDropdownMenuItem,
  ComponentDropdownMenuItemCheckbox,
  ComponentDropdownStation,
};
