import React from "react";
import Portslotmain from "../../Styled-Components/Portslot";
import { ThemeProvider } from "styled-components";
import theme from "../../Globals/theme";

const Ports = ({ portNumber, vehicleName, precentage, dateAndtime, name }) => {
  return (
    <ThemeProvider theme={theme}>
      <Portslotmain
        portNumber={portNumber}
        vehicleName={vehicleName}
        precentage={precentage}
        dateAndtime={dateAndtime}
        name={name}
      />
    </ThemeProvider>
  );
};
export default Ports;
