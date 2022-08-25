import React from "react";
import theme from "../../Globals/theme";
import { ThemeProvider } from "styled-components";
import RadioboxComponent from "../../Styled-Components/RadioButton";

const ComponentRadio = () => {
  return (
    <ThemeProvider theme={theme}>
      <RadioboxComponent></RadioboxComponent>
    </ThemeProvider>
  );
};
export { ComponentRadio };
