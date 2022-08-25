import React from "react";
import theme from "../../Globals/theme";
import { ThemeProvider } from "styled-components";
import { FileUpload, FileUploadDisabled, FileUploadError } from "../../Styled-Components/FileUpload";

const File_Upload = () => {
  return (
    <ThemeProvider theme={theme}>
      <FileUpload />
    </ThemeProvider>
  );
};

const File_Upload_Error = () => {
  return (
    <ThemeProvider theme={theme}>
      <FileUploadError />
    </ThemeProvider>
  );
};

const File_Upload_Disabled = () => {
  return (
    <ThemeProvider theme={theme}>
      <FileUploadDisabled />
    </ThemeProvider>
  );
};
export { File_Upload, File_Upload_Error, File_Upload_Disabled };
