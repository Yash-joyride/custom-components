import React from "react";
import theme from "../../Globals/theme";
import { ThemeProvider } from "styled-components";
import { CustomTooltip } from "../../Styled-Components/Tooltip";

const Custom_Tooltip = ({ children, title, placement }) => {
  return (
    <ThemeProvider theme={theme}>
      <CustomTooltip title={title} placement={placement}>
        {children}
      </CustomTooltip>
    </ThemeProvider>
  );
};

export { Custom_Tooltip };
