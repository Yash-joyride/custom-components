import React from "react";
import {
  Input_Field,
  Required_Input_Field,
  // Required_Input_Field_Error,
  // Required_Input_Field_Success,
  Hidden_Input_Field,
} from "./InputField";

// import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/Input Field/ Input Field",
  component: Input_Field,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const RequiredInputField = () => (
  <Required_Input_Field placeholder="Form" />
);
export const InputField = () => <Input_Field placeholder="Form" />;
//export const RequiredInputFieldError = () => <Required_Input_Field_Error />;
//export const RequiredInputFieldSuccess = () => <Required_Input_Field_Success />;
export const HiddenInputField = () => <Hidden_Input_Field />;
// export const UnhiddenInputField = () => <Unhidden_Input_Field placeholder="Form" />;
