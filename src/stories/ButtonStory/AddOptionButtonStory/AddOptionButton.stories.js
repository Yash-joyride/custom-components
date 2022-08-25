import React from "react";

// import { Button } from './Button';
import { ButtonAddOptionPrimary, ButtonAddOptionSecondary, ButtonAddOptionInfo, ButtonAddOptionSuccess, ButtonAddOptionWarning, ButtonAddOptionError } from "../button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Button/Add N Option Buttons",
  component: ButtonAddOptionPrimary,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const AddOptionPrimaryButton = () => <ButtonAddOptionPrimary>Button</ButtonAddOptionPrimary>;

export const AddOptionInfoButton = () => <ButtonAddOptionInfo>Button</ButtonAddOptionInfo>;

export const AddOptionSecondaryButton = () => <ButtonAddOptionSecondary>Button</ButtonAddOptionSecondary>;

export const AddOptionSuccessButton = () => <ButtonAddOptionSuccess>Button</ButtonAddOptionSuccess>;

export const AddOptionWarningButton = () => <ButtonAddOptionWarning>Button</ButtonAddOptionWarning>;

export const AddOptionErrorButton = () => <ButtonAddOptionError>Button</ButtonAddOptionError>;
