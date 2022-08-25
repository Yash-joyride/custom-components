import React from "react";

// import { Button } from './Button';
import { ButtonAddPrimary, ButtonAddInfo, ButtonAddSecondary, ButtonAddSuccess, ButtonAddWarning, ButtonAddError } from "../button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Button/Add Buttons",
  component: ButtonAddPrimary,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const AddPrimaryButton = () => <ButtonAddPrimary>Button</ButtonAddPrimary>;

export const AddSecondaryButton = () => <ButtonAddSecondary>Button</ButtonAddSecondary>;

export const AddInfoButton = () => <ButtonAddInfo>Button</ButtonAddInfo>;

export const AddSuccessButton = () => <ButtonAddSuccess>Button</ButtonAddSuccess>;

export const AddWarningButton = () => <ButtonAddWarning>Button</ButtonAddWarning>;

export const AddErrorButton = () => <ButtonAddError>Button</ButtonAddError>;
