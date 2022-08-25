import React from "react";
import Portnew from "../../Styled-Components/Port/index.js";
import { ThemeProvider } from "styled-components";
import theme from "../../Globals/theme";

const Port = ({ portNumber, freePort }) => {
  return (
    <ThemeProvider theme={theme}>
      <Portnew portNumber={portNumber} freePort={freePort} />
    </ThemeProvider>
  );
};
export default Port;
