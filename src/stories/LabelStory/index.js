import React from "react";
import theme from "../../Globals/theme";
import { ThemeProvider } from "styled-components";
import { RequiredLabel, Label } from "../../Styled-Components/labels";

const Required_Label = ({ label }) => {
  return (
    <ThemeProvider theme={theme}>
      <RequiredLabel label={label} />
    </ThemeProvider>
  );
};

const Normal_Label = ({ label }) => {
  return (
    <ThemeProvider theme={theme}>
      <Label label={label} />
    </ThemeProvider>
  );
};
export { Required_Label, Normal_Label };
