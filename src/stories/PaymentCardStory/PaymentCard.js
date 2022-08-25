import React from "react";
import theme from "../../Globals/theme";
import { ThemeProvider } from "styled-components";
import {
  AddPaymentMethod,
  VisaCard,
} from "../../Styled-Components/PaymentCard";

export const Add_Payment_Method = () => {
  return (
    <ThemeProvider theme={theme}>
      <AddPaymentMethod />
    </ThemeProvider>
  );
};

export const Visa_Card = ({ cardHolderName, cardNumber, expireyDate }) => {
  return (
    <ThemeProvider theme={theme}>
      <VisaCard
        cardHolderName={cardHolderName}
        cardNumber={cardNumber}
        expireyDate={expireyDate}
      />
    </ThemeProvider>
  );
};
