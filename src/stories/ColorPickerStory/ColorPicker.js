import React from "react";
import { ColorPickerComponent } from "../../Styled-Components/Color-Picker";
import theme from "../../Globals/theme";
import { ThemeProvider } from "styled-components";

export const Color_Picker = () => {
  return (
    <ThemeProvider theme={theme}>
      <ColorPickerComponent />
    </ThemeProvider>
  );
};
