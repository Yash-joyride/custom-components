import React from "react";

// import { Button } from './Button';
import { ButtonAddition } from "../button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Button/Addition Buttons",
  component: ButtonAddition,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const AdditionButton = () => <ButtonAddition />;
