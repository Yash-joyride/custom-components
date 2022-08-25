import React from "react";
import { QR_Code_Card } from "./QRCodeCard";

// import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/QR Code Card/QR Code Card",
  component: QR_Code_Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const QRCodeCard = () => <QR_Code_Card code="48464846625439" />;
