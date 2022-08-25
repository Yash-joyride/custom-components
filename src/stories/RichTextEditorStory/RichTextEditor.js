import React from "react";
import theme from "../../Globals/theme";
import { ThemeProvider } from "styled-components";
import { RichTextEditor } from "../../Styled-Components/RichTextEditor";

export const Rich_Text_Editor = () => {
  return (
    <ThemeProvider theme={theme}>
      <RichTextEditor />
    </ThemeProvider>
  );
};
