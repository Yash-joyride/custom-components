import React from "react";
import theme from "../../Globals/theme";
import { ThemeProvider } from "styled-components";
import { QRCodeCard } from "../../Styled-Components/QRCodeCard";

const QR_Code_Card = ({ code }) => {
  return (
    <ThemeProvider theme={theme}>
      <QRCodeCard code={code} />
    </ThemeProvider>
  );
};

export { QR_Code_Card };
