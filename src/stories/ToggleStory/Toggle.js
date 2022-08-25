import React from "react";
import theme from "../../Globals/theme";
import { ThemeProvider } from "styled-components";
import {
  ToggleButton,
  LabeledToggleButton,
} from "../../Styled-Components/Toggle";

const Toggle_Button = () => {
  return (
    <ThemeProvider theme={theme}>
      <ToggleButton />
    </ThemeProvider>
  );
};

const Labeled_Toggle_Button = () => {
  return (
    <ThemeProvider theme={theme}>
      <LabeledToggleButton />
    </ThemeProvider>
  );
};

export { Toggle_Button, Labeled_Toggle_Button };
