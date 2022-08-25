import React from "react";

// import { Button } from './Button';
import { ButtonSmall, ButtonAddSmall } from "../button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Button/Small Buttons",
  component: ButtonSmall,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const SmallPrimaryButton = () => <ButtonSmall>Button</ButtonSmall>;

export const SmallAddButton = () => <ButtonAddSmall>Button</ButtonAddSmall>;
