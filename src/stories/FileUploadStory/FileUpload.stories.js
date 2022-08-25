import React from "react";

// import { Button } from './Button';
import { File_Upload, File_Upload_Error, File_Upload_Disabled } from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Joyride/File Upload/FileUpload",
  component: File_Upload,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const FileUpload = () => <File_Upload />;
export const FileUploadError = () => <File_Upload_Error />;
export const FileUploadDisabled = () => <File_Upload_Disabled />;

// export const DisabledCheckbox = () => <CheckboxDisabled label="Button" />;
