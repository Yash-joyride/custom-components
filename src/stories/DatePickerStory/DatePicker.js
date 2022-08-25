import React from "react";
import theme from "../../Globals/theme";
import { ThemeProvider } from "styled-components";
import { DateRangePicker } from "../../Styled-Components/DatePicker";

export const Date_Picker = () => {
  return (
    <ThemeProvider theme={theme}>
      <DateRangePicker />
    </ThemeProvider>
  );
};
