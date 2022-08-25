import React from "react";
import theme from "../../Globals/theme";
import { ThemeProvider } from "styled-components";
import {
  Modelerror,
  Modelinfo,
  Modelpanel,
  Modelsuccess,
  Modelwarning,
} from "../../Styled-Components/Models/index";

const Warningmain = () => {
  return (
    <ThemeProvider theme={theme}>
      <Modelwarning />
    </ThemeProvider>
  );
};

const Errormain = () => {
  return (
    <ThemeProvider theme={theme}>
      <Modelerror />
    </ThemeProvider>
  );
};
const Successmain = () => {
  return (
    <ThemeProvider theme={theme}>
      <Modelsuccess />
    </ThemeProvider>
  );
};
const Infomain = () => {
  return (
    <ThemeProvider theme={theme}>
      <Modelinfo />
    </ThemeProvider>
  );
};
const Panelmain = () => {
  return (
    <ThemeProvider theme={theme}>
      <Modelpanel />
    </ThemeProvider>
  );
};
export { Warningmain, Errormain, Successmain, Infomain, Panelmain };
