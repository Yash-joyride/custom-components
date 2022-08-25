import React from "react";
import theme from "../../Globals/theme";
import { ThemeProvider } from "styled-components";
import {
  Selectmessagemain,
  Successmain,
} from "../../Styled-Components/FeedbackMessage";
const Feedbackmain = ({ messageNew }) => {
  return (
    <ThemeProvider theme={theme}>
      <Successmain messageNew={messageNew}></Successmain>
    </ThemeProvider>
  );
};

const Selectmain = ({ messageNewMain }) => {
  return (
    <ThemeProvider theme={theme}>
      <Selectmessagemain messageNewMain={messageNewMain}></Selectmessagemain>
    </ThemeProvider>
  );
};
export { Feedbackmain, Selectmain };
