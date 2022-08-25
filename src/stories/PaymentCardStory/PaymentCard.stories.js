import React from "react";
import { Add_Payment_Method, Visa_Card } from "./PaymentCard";

// import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Payment Card/Add Payment Method Card",
  component: Add_Payment_Method,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const AddPaymentMethod = () => <Add_Payment_Method />;
export const VisaCard = () => (
  <Visa_Card
    cardHolderName="Vincenzo Cifani"
    cardNumber="**** **** **** 0936"
    expireyDate="Expirey: 10/23"
  />
);
