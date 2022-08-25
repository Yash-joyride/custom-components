import React from "react";
import { Required_Label } from "../index";

// import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/label/Required Label",
  component: Required_Label,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const RequiredLabel = () => <Required_Label label="Label" />;

