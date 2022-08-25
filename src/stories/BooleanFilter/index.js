import React from "react";
import BooleanFilter from "../../Styled-Components/BooleanFilter";
import { ThemeProvider } from "styled-components";
import theme from "../../Globals/theme";

const Boolean_Filter = ({ label }) => {
  return (
    <ThemeProvider theme={theme}>
      <BooleanFilter label={label} />
    </ThemeProvider>
  );
};

export { Boolean_Filter };
