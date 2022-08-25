import React from "react";
import CheckboxComponent from "../../Styled-Components/Checkbox";
import ActiveCheckbox from "../../Styled-Components/Checkbox/ActiveCheckbox";
import DisableCheckbox from "../../Styled-Components/Checkbox/DisabledCheckbox";
import { ThemeProvider } from "styled-components";
import theme from "../../Globals/theme";

const ComponentCheckbox = () => {
  return (
    <ThemeProvider theme={theme}>
      <CheckboxComponent />
    </ThemeProvider>
  );
};

const CheckboxActive = ({ label }) => {
  return (
    <ThemeProvider theme={theme}>
      <ActiveCheckbox label={label} />
    </ThemeProvider>
  );
};

const CheckboxDisabled = ({ label }) => {
  return (
    <ThemeProvider theme={theme}>
      <DisableCheckbox label={label} />
    </ThemeProvider>
  );
};

export { ComponentCheckbox, CheckboxActive, CheckboxDisabled };
