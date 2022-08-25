import React from "react";

// import { Button } from './Button';
import { ButtonOptionPrimary, ButtonOptionInfo, ButtonOptionSecondary, ButtonOptionSuccess, ButtonOptionWarning, ButtonOptionError } from "../button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Button/Option Buttons",
  component: ButtonOptionPrimary,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const OptionPrimaryButton = () => <ButtonOptionPrimary>Button</ButtonOptionPrimary>;

export const OptionInfoButton = () => <ButtonOptionInfo>Button</ButtonOptionInfo>;

export const OptionSecondaryButton = () => <ButtonOptionSecondary>Button</ButtonOptionSecondary>;

export const OptionSuccessButton = () => <ButtonOptionSuccess>Button</ButtonOptionSuccess>;

export const OptionWarningButton = () => <ButtonOptionWarning>Button</ButtonOptionWarning>;

export const OptionErrorButton = () => <ButtonOptionError>Button</ButtonOptionError>;
