import React from "react";
import theme from "../../Globals/theme";
import { ThemeProvider } from "styled-components";
import {
  HiddenInputField,
  InputField,
  RequiredInputField,
  RequiredInputFieldError,
  RequiredInputFieldSuccess,
} from "../../Styled-Components/InputField";

const Input_Field = ({ placeholder }) => {
  return (
    <ThemeProvider theme={theme}>
      <InputField placeholder={placeholder} />
    </ThemeProvider>
  );
};

const Required_Input_Field = ({ placeholder }) => {
  return (
    <ThemeProvider theme={theme}>
      <RequiredInputField placeholder={placeholder} />
    </ThemeProvider>
  );
};

// const Required_Input_Field_Error = () => {
//   return (
//     <ThemeProvider theme={theme}>
//       <RequiredInputFieldError />
//     </ThemeProvider>
//   );
// };

// const Required_Input_Field_Success = () => {
//   return (
//     <ThemeProvider theme={theme}>
//       <RequiredInputFieldSuccess />
//     </ThemeProvider>
//   );
// };

const Hidden_Input_Field = () => {
  return (
    <ThemeProvider theme={theme}>
      <HiddenInputField />
    </ThemeProvider>
  );
};

// const Unhidden_Input_Field = ({ placeholder }) => {
//   return (
//     <ThemeProvider theme={theme}>
//       <UnhiddenInputField placeholder={placeholder} />
//     </ThemeProvider>
//   );
// };
export { Input_Field, Required_Input_Field, Hidden_Input_Field };
