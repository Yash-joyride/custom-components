import React from "react";

// import { Button } from './Button';
import { ButtonArrow, ButtonSmallArrow } from "../button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Button/Arrow Buttons",
  component: ButtonArrow,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const ArrowButton = () => <ButtonArrow />;

export const SmallArrowButton = () => <ButtonSmallArrow />;
